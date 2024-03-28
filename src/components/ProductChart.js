import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useSelector } from "react-redux";
import { Paginator } from "primereact/paginator";

function ProductChart() {
  function setChartValues() {
    products.map(
      (items, index) => (
        productCategoryName.push(items.category), productStock.push(items.stock)
      )
    );
  }

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    console.log(event);
    console.log(event.page);
  };

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const products = useSelector((state) => state.products);

  let productCategoryName = [];
  let productStock = [];

  useEffect(() => {
    console.log(products);
    setChartValues();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: productCategoryName,
      datasets: [
        {
          label: "Stock Status",
          backgroundColor: "#06b6d4",
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: productStock,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div>
      <Chart
        type="bar"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-30rem"
      />
      <Paginator
        first={first}
        rows={rows}
        totalRecords={120}
        rowsPerPageOptions={[5, 10]}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ProductChart;
