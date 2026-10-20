/**
 * Receives form submissions from oromorc.org and logs each one as a new row
 * in a sheet tab named after the form (one tab per form, auto-created).
 *
 * Setup:
 * 1. Create a new Google Sheet (or open an existing private one).
 * 2. Extensions -> Apps Script, delete the placeholder code, paste this file in.
 * 3. Deploy -> New deployment -> type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the resulting Web app URL and send it back so it can be wired in.
 * 5. Share the Sheet (not the script) with anyone who should be able to view it.
 *
 * Re-running "Deploy -> New deployment" after editing this file produces a
 * NEW url and breaks the old one — use "Manage deployments -> Edit -> New
 * version" instead if this script is ever updated later.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var formType = (data.formType || 'Unknown').toString();
    var fields = data.fields || {};

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(formType);
    if (!sheet) {
      sheet = ss.insertSheet(formType);
      sheet.appendRow(['Submitted At']);
      sheet.setFrozenRows(1);
    }

    var lastCol = sheet.getLastColumn();
    var headers = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];
    if (headers.length === 0) {
      headers = ['Submitted At'];
      sheet.getRange(1, 1, 1, 1).setValues([headers]);
    }

    // Any field name not seen before becomes a new column, so the sheet
    // adapts automatically if a form's fields change later.
    Object.keys(fields).forEach(function (key) {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
        sheet.getRange(1, headers.length).setValue(key);
      }
    });

    var row = headers.map(function (header) {
      if (header === 'Submitted At') {
        return Utilities.formatDate(new Date(), 'Australia/Melbourne', 'yyyy-MM-dd HH:mm:ss');
      }
      return header in fields ? fields[header] : '';
    });
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
