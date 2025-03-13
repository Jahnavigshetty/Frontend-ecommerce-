import { useEffect, useState } from "react";
import axios from "axios";

//card imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import { blue } from "@mui/material/colors";

export default function Home() {
  const [orgData, setOrgData] = useState([]);
  const [dup, setDup] = useState([]);
  const [cart, setCart] = useState(0);
  let cartresult = [];

  // function handleCart() {
  //   let ResultArray=[]
  //   orgData.filter((ele)=>{
  //     if(ele){
  //        ResultArray.includes(ele)
  //     }
  //   })
  // }

  const handleCart = (ele) => {
    // console.log(cartresult.includes(ele), ele);

    if (cartresult.includes(ele)) {
      alert("already present");
    } else {
      cartresult.push(7);
      setCart(cart + 1);
    }
  };

  // setCart(cart + 1);

  let filteredCat = [];
  for (let i = 0; i < orgData.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < orgData.length; j++) {
      if (orgData[i].category === orgData[j].category) {
        temp++;
      }
    }
    if (temp == 0) {
      filteredCat.push(orgData[i].category);
    }
  }

  const myData = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setOrgData(data.data);
      setDup(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myData();
  }, []);

  return (
    <>
      <Header
        cart={cart}
        setOrgData={setOrgData}
        orgData={orgData}
        dup={dup}
        setDup={setDup}
        filteredCat={filteredCat}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {dup.map((ele) => {
          return (
            <div key={ele.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  border: "23px solid #1976d2c9",
                  borderRadius: "2px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "250px",
                  height: "300px",
                }}
              >
                <CardMedia sx={{ height: "30px" }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={ele.image} height="100px" width={100} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    style={{ fontSize: "11 px" }}
                  >
                    {ele.title.slice(0, 15) + "..."}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "text.secondary" }}
                  >
                    {ele.description.slice(0, 30) + "..."}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {ele.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    href="#outlined-buttons"
                    style={{
                      border: "2px solid #257fd4",
                      borderRadius: "10px",
                      backgroundColor: "#5492b440",
                    }}
                    onClick={() => handleCart(ele)}
                  >
                    Shop now
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
