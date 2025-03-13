import React from "react";
import { Toolbar, Typography, TextField, Button } from "@mui/material";

export default function Header({
  orgData,
  setDup,
  filteredCat,
  cart,
}) {
  // console.log(filteredCat, "filteredCat");

  function change(e) {
    // setRes((prev) => prev.filter((item) => item.id == e.target.value));
    let resultOfSearch = orgData.filter((ele) => {
      if (ele.id == e.target.value) {
        console.log(ele);
        return ele;
      } else if (e.target.value === "") {
        return ele;
      }
    });
    setDup(resultOfSearch);
  }

  function handlechange() {
    const resultOfSort = [...orgData].sort((a, b) => b.price - a.price);
    setDup(resultOfSort);
  }

  function handlecategory(e) {
    let resultOfCategory = orgData.filter((item) => {
      if (item.category == e.target.value) {
        return item;
      }
      if (e.target.value == "") {
        return item;
      }
    });
    setDup(resultOfCategory);
  }

  return (
    <div
      position="static"
      style={{
        backgroundColor: "white",
        boxShadow: "5px",
        display: "flex",
        alignContent: "space-between",
      }}
    >
      <TextField
        type="text"
        placeholder="Product title"
        style={{ display: "flex", border: "2px solid black" }}
        onChange={change}
      />
      <select onChange={handlecategory}>
        <option value={""}>By Category</option>
        {filteredCat.map((ele) => {
          return <option value={ele}>{ele}</option>;
        })}
      </select>

      <Button
        size="small"
        variant="outlined"
        href="#outlined-buttons"
        style={{
          border: "2px solidrgb(235, 159, 6)",
          backgroundColor: "#1976d2",
          color: "white",
        }}
        onClick={handlechange}
      >
        Sort
      </Button>
      <Button>{cart}</Button>
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        {["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"].map(
          (item, index) => {
            return (
              <>
                <Typography
                  key={index}
                  variant="h6"
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Typography>
              </>
            );
          }
        )}
      </Toolbar>
    </div>
  );
}
