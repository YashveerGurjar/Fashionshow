import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Addproductsapi } from "../Redux/Apicall";
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const initialValues = {
    title: '',
    info: '',
    tax: '',
    desc: '',
    categories: '',
    size: '',
    img: '',
    color: '',
    amount: '',
    price: ''

  };
  const validationSchema = yup.object({
    title: yup.string().required("required"),
    info: yup.string().required("required"),
    tax: yup.string().required("required"),
    desc: yup.string().required("required"),
    categories: yup.string().required("required"),
    size: yup.string().required("required"),
    img: yup.string().required("required"),
    color: yup.string().required("required"),
    amount: yup.string().required("required"),
    price: yup.string().required("required"),


  })

  const handleSubmit = (value) => {
    console.log("🚀 ~ file: Add.product.jsx:46 ~ handleSubmit ~ value:", value)
    const data = {
      title: value.title,
      info: value.info,
      tax: value.tax,
      desc: value.desc,
      categories: value.categories,
      size: value.size,
      img: value.img,
      color: value.color,
      amount: value.amount,
      price: value.price
    };

    Addproductsapi(dispatch,data);
    navigate("/Product")
    console.log("alldata ka data", data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography component="h1" variant="h5" fontSize={"50px"}>
                  Add Product
                </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {
            formik =>
              <Form style={{marginTop:"30px"}}>
                <div>
                  <label htmlFor="title">Name</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    // autocomplete="off"
                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="title" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="info">Info</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="info"
                    name="info"
                    placeholder="info"
                    // autocomplete="off"
                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="info" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="tax">Tax</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="tax"
                    name="tax"
                    placeholder="tax"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="tax" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="desc">Description</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="desc"
                    name="desc"
                    placeholder="decription"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="desc" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="categories">Categories</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="categories"
                    name="categories"
                    placeholder="categories"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="categories" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="size">Size</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="usersizename"
                    name="size"
                    placeholder="name"
                    // autocomplete="off"
                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="size" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="img">image</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="img"
                    name="img"
                    placeholder="image"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="img" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="color">Color</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="text"
                    id="color"
                    name="color"
                    placeholder="color"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="color" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="amount">Amount</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="amount"
                    // autocomplete="off"

                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="amount" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <Field style={{ margin: '5px 20px', display: "flex", alignItems: "center", flexDirection: "column", width: "300px", height: "40px" }}
                    type="number"
                    id="price"
                    name="price"
                    placeholder="price"
                    // autocomplete="off"
                  />
                  <ErrorMessage style={{ margin: "10px", color: "red" }} name="price" component="div" className="error" />
                </div>
                <div>
                <Button type="submit" variant="contained" color="success" sx={{marginLeft:"100px"}}>
                Add Product
              </Button>
                </div>
              </Form>
          }
        </Formik>
      </Box>
    </Container>
  );

}
//===================================================================================================

// const data = new FormData(event.currentTarget);
// const title = data.get("title");
// const info = data.get("info");
// const tax = data.get("tax");
// const desc = data.get("desc");
// const categories = data.get("categories").split(",");
// const size = data.get("size").split(",");
// const img = data.get("img");
// const color = data.get("color").split(",");
// const amount = data.get("amount");
// const price = data.get("price");
// console.log("data in allproduct", data);

// let alldata = {
//   title,
//   info,
//   tax,
//   desc,
//   categories,
//   size,
//   img,
//   color,
//   amount,
//   price
// }
{/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */ }
{/* <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="info"
            label="info"
            id="info"
            autoComplete="info"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="tax"
            label="tax"
            id="tax"
            autoComplete="tax"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="desc"
            label="desc"
            id="desc"
            autoComplete="desc"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="img"
            label="img"
            id="img"
            autoComplete="img"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="categories"
            label="categories"
            id="categories"
            autoComplete="categories"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="size"
            label="size"
            id="size"
            autoComplete="size"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="color"
            label="color"
            id="color"
            autoComplete="color"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="amount"
            label="amount"
            id="amount"
            autoComplete="amount"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="price"
            id="price"
            autoComplete="price"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          // disabled={isfetching}
          >
            Add Product
          </Button>
        </Box>
   */}

