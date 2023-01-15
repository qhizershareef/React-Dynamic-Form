import { Field } from 'formik';
import React from 'react';
import { Col, Form, Row, FormGroup } from 'react-bootstrap';

const FormTextComponent= React.memo( (props) =>{
    const { label, name, ...rest } = props;
    const {Orientation}= props;
    console.log(props)

    return (
        <React.Fragment>
        <FormGroup as={Orientation || Row} className="my-3" controlId={name} >
            <Form.Label column sm={3}>
                {label}
            </Form.Label>
            <Col sm={9}>
            <Field name={name} >
                {({ field }) => (
                    <Form.Control 
                        type="text"
                        placeholder={label}
                        name={field.name}
                        onChange={field.onChange}
                        // name={name} 
                        // {...field}
                        {...rest}
                    />
                )}
            </Field>
            </Col>
        </FormGroup>
        </React.Fragment>
    )
})


// also add a prop for value and onChange event listener to the FormTextComponent

export default FormTextComponent;