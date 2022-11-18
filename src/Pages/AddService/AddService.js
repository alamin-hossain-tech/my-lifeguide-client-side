import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const AddService = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const thumbUrl = form.thumbUrl.value;
    const description = form.description.value;
    console.log(description, title, thumbUrl);
    if (description === "") {
      toast.error("description can not be empty");
    }
    const service = {
      author: user?.displayName,
      published: new Date(),
      title: title,
      thumbUrl: thumbUrl,
      description: description,
    };
    fetch("http://localhost:4000/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => {
        toast.success("Service Added");
        console.log(res);
        form.reset();
        // setTimeout(() => {
        //   navigate("/services");
        // }, 3000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <TittleHeader title={"Add a Service"}></TittleHeader>
      <div className="container mx-auto my-24">
        <Form onSubmit={handleAddService}>
          <Form.Field>
            <label>Enter Service Title</label>
            <input placeholder="Enter Service Title" required name="title" />
          </Form.Field>
          <Form.Field>
            <label>Thubnail Url</label>
            <input placeholder="Thubnail Url" required name="thumbUrl" />
          </Form.Field>
          <Form.TextArea
            label="Description"
            placeholder="Tell more about service..."
            name="description"
          />

          <Button type="submit">Submit</Button>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default AddService;
