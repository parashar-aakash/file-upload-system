import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

export default function ReportingList() {
  const { listData, setListData } = useState([]);

  const columns = [
    { dataField: "_id", text: "Id" },
    { dataField: "filename", text: "Filename", filter: textFilter() },
    { dataField: "error", text: "Error" },
    { dataField: "date", text: "Date" },
    { dataField: "time", text: "Time" },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: (page, sizePerPage) => {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: (page, sizePerPage) => {
      console.log("page", page); console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    fetch("http://localhost:3003/fileList")
      .then((response) => response.json())
      .then((result) => {
        console.log("LisT", result);
        setListData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(listData);
  
  const list = [
    {
      _id: "61cd66e8d7a8977846ea2eec",
      filename: "SampleData.csv",
      date: "2021-12-30",
      time: "13:29:36",
      error:
        "ValidationError: Handle: Path `Handle` is required., Body: Path `Body` is required.",
      __v: 0,
    },
    {
      _id: "61cd66e8d7a8977846ea2eed",
      filename: "SampleData.csv",
      date: "2021-12-30",
      time: "13:29:36",
      error:
        "ValidationError: Title: Path `Title` is required., Body: Path `Body` is required.",
      __v: 0,
    },
    {
      _id: "61cd8950c3ae6632772040ba",
      filename: "SampleData.csv",
      date: "2021-12-30",
      time: "15:56:24",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
    {
      _id: "61cd8950c3ae6632772040b9",
      filename: "SampleData.csv",
      date: "2021-12-30",
      time: "15:56:24",
      error: "ValidationError: Handle: Path `Handle` is required.",
      __v: 0,
    },
    {
      _id: "61cd8950c3ae6632772040bb",
      filename: "SampleData.csv",
      date: "2021-12-30",
      time: "15:56:24",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
    {
      _id: "61cd8b3762b84fd42c19cb87",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-30",
      time: "16:4:31",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
    {
      _id: "61cd8b3762b84fd42c19cb88",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-30",
      time: "16:4:31",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
    {
      _id: "61cd8b3762b84fd42c19cb86",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-30",
      time: "16:4:31",
      error: "ValidationError: Handle: Path `Handle` is required.",
      __v: 0,
    },
    {
      _id: "61ce01315a7cb107106af747",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-31",
      time: "0:27:53",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
    {
      _id: "61ce01315a7cb107106af746",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-31",
      time: "0:27:53",
      error: "ValidationError: Handle: Path `Handle` is required.",
      __v: 0,
    },
    {
      _id: "61ce01315a7cb107106af748",
      filename: "product file - Sample - Sheet1.csv",
      date: "2021-12-31",
      time: "0:27:53",
      error:
        "ValidationError: Title: Path `Title` is required., Vendor: Path `Vendor` is required.",
      __v: 0,
    },
  ];

  return (
    <div>
      <BootstrapTable 
      keyField="_id" 
      columns={columns} 
      data={list} 
      pagination = { pagination }
      filter = { filterFactory() }
      />
    </div>
  );
}
