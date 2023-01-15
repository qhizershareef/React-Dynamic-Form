import { Formik,Form } from "formik";
import { useEffect, useState } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import BreadCrumbComponent from "../components/BreadCrumbComponent"
import CheckboxGroup from "../utils/CheckBoxGroup";
import FormTextComponent from "../utils/FormTextComponent"
import RadioButtons from "../utils/RadioButtons";
import { movieQuestionnaire} from "../utils/FormData";


function TestScreen() {
    const crumbs = [{name:'Home',path:'/'},{name:'TestForm',path:'/TestForm'}];
    const [formData, setFormData] = useState({});
    const [fieldNames, setFieldNames] = useState([]);

    useEffect(() => {
        movieQuestionnaire.forEach(element => {
            let fieldName = element.fieldName;
            setFieldNames(fields => [...fields, {[fieldName]:''}]);
        });
    },[]);
    return (
        <div className="userDetails_Container">
            <Container>
                <Row className="py-3">
                    <h1>User Details</h1>
                    <BreadCrumbComponent crumbs={crumbs} /></Row>
                <Row className="d-flex justify-content-center align-center">
                        <Formik
                            initialValues={{...fieldNames}}

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    setFormData(values);
                                    window.scrollTo(0,document.body.scrollHeight);
                                }, 500);
                            }}
                        >
                            {({ isSubmitting }) => (
                            <Col md={6}>
                                <Form>
                                    {
                                        movieQuestionnaire.map((item, index) => {
                                            return (
                                            item.type==='text'?
                                                    <FormTextComponent label={item.label} name={item.fieldName} key={index}/>
                                                    
                                            :item.type==='radio'?
                                                    <RadioButtons label={item.label} name={item.fieldName} options={item.options} key={index}/>
                                                
                                            : item.type==='checkbox'?
                                                    <CheckboxGroup label={item.label} name={item.fieldName} options={item.options} key={index}/>
                                            : null
                                                )
                                            }
                                        )
                                    } 
                                    <Row>
                                        <Col md={6}>
                                            <Button type="submit" disabled={isSubmitting} className="my-5">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                            )}
                        </Formik>
                        <pre>
                            {JSON.stringify(formData, null, 2)}
                        </pre>
                </Row>
            </Container>
        </div>
    )
}

export default TestScreen;