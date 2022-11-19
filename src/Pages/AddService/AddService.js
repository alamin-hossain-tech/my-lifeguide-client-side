import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TabTitle from "../../Utility/General";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const AddService = () => {
  TabTitle("Add Services");
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const thumbUrl = form.thumbUrl.value;
    const description = form.description.value;
    const certificate = form.certificate.value;
    const language = form.language.value;
    const duration = form.duration.value;
    const level = form.level.value;
    console.log(
      description,
      title,
      thumbUrl,
      certificate,
      language,
      duration,
      level
    );
    if (description === "") {
      toast.error("description can not be empty");
    }
    const service = {
      author: user?.displayName,
      published: new Date().getTime(),
      title: title,
      thumbUrl: thumbUrl,
      description: description,
      language: language,
      duration: duration,
      level: level,
      certificate: certificate,
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
        setTimeout(() => {
          navigate("/services");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <TittleHeader title={"Add a Service"}></TittleHeader>
      <div className="container mx-auto my-24 px-5 lg:px-0">
        <Form onSubmit={handleAddService}>
          <Form.Field>
            <label>Enter Service Title</label>
            <input placeholder="Enter Service Title" required name="title" />
          </Form.Field>
          <Form.Field>
            <label>Thubnail Url</label>
            <input placeholder="Thubnail Url" required name="thumbUrl" />
          </Form.Field>
          <Form.Field label="Language ?" control="select" name="language">
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
          </Form.Field>
          <Form.Field label="Skill Level ?" control="select" name="level">
            <option value="All Level">All Level</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Beginer">Beginer</option>
          </Form.Field>
          <Form.Field>
            <label>Duration (hours) </label>
            <input
              placeholder="Enter Service Duration"
              required
              name="duration"
              type="number"
            />
          </Form.Field>
          <Form.Field
            label="Certificate Availavle"
            control="select"
            name="certificate"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
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
