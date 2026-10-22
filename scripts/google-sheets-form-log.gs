/**
 * Receives form submissions from oromorc.org, logs each one as a new row in
 * a sheet tab named after the form (one tab per form, auto-created), and
 * emails everyone who currently has access to this Sheet so they're alerted
 * the moment it happens. Add or remove who gets notified just by sharing or
 * unsharing the Sheet itself — nothing else to maintain.
 *
 * Setup:
 * 1. Create a new Google Sheet (or open an existing private one).
 * 2. Extensions -> Apps Script, delete the placeholder code, paste this file in.
 * 3. Deploy -> New deployment -> type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the resulting Web app URL and send it back so it can be wired in.
 * 5. Share the Sheet (not the script) with anyone who should view it AND be
 *    emailed on every new submission.
 *
 * Re-running "Deploy -> New deployment" after editing this file produces a
 * NEW url and breaks the old one — use "Manage deployments -> Edit -> New
 * version" instead if this script is ever updated later.
 *
 * SHARED_SECRET below must exactly match SHEET_LOG_TOKEN in the website's
 * src/lib/sheetsLog.ts. It isn't real security (this script's URL and the
 * matching website source are both public), but it filters out casual or
 * automated spam that doesn't know the expected request shape.
 */

var SHARED_SECRET = 'ACnlkyl_nbDOhz8kY5BcgHl9KvqGcrXEtsCfRGQxxsw';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.token !== SHARED_SECRET) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
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

    notifySheetAccessList(ss, formType, fields);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function notifySheetAccessList(ss, formType, fields) {
  try {
    var file = DriveApp.getFileById(ss.getId());
    var owner = file.getOwner();
    var people = file.getEditors().concat(file.getViewers());
    if (owner) people.push(owner);

    var seen = {};
    var recipients = [];
    people.forEach(function (person) {
      var email = person.getEmail();
      if (email && !seen[email]) {
        seen[email] = true;
        recipients.push(email);
      }
    });
    if (recipients.length === 0) return;

    var lines = Object.keys(fields).map(function (key) {
      return key + ': ' + fields[key];
    });

    MailApp.sendEmail({
      to: recipients.join(','),
      subject: 'New ' + formType + ' submission — Oromo Resource Centre',
      body:
        'A new "' + formType + '" form was just submitted on oromorc.org.\n\n' +
        lines.join('\n') +
        '\n\nView all submissions: ' + ss.getUrl(),
    });
  } catch (err) {
    // Never let a notification failure stop the submission from being logged.
  }
}
