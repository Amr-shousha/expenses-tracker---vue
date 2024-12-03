<template>
  <div>
    <button @click="downloadPDF">Download PDF</button>
  </div>
</template>

<script setup>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { defineProps } from "vue";

// Define the prop for transactions
const props = defineProps({
  transactions: Array,
});

// Function to generate and download the PDF
const downloadPDF = () => {
  const doc = new jsPDF();

  // Adding a title to the PDF
  doc.setFontSize(18);
  doc.text("Expenses Tracker", 14, 20);

  // Setting some document styling
  doc.setFontSize(12);
  doc.setTextColor(100);

  // Use autoTable to create a table from the data
  doc.autoTable({
    head: [["ID", "Item", "Amount", "Date"]],
    body: props.transactions.map((item) => [
      item.id,
      item.text,
      item.amount,
      item.date,
    ]),
    startY: 30, // Vertical offset for the table
    styles: { fontSize: 10, cellPadding: 5 },
    headStyles: { fillColor: [0, 57, 107], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [220, 230, 240] },
  });

  // Save the PDF
  doc.save("user_data.pdf");
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid #adadad;
}
</style>
