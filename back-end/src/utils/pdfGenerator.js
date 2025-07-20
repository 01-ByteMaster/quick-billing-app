
import PDFDocument from 'pdfkit';
import fs from 'fs';

export function generateInvoicePDF(outputPath) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(20).text('QuickBill Invoice', {
    align: 'center',
    valign: 'center'
  });

  doc.end();
}
