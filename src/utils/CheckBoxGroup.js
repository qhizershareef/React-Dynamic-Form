import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { Form } from 'react-bootstrap';
import FormTextComponent from './FormTextComponent';

function CheckBoxGroup (props) {
  const { label, name, options, ...rest } = props;
  const [other,setOther]=React.useState('');
  console.log(props)
  return (
      <Form.Group>
        <Form.Label as="legend" column>
            {label}
        </Form.Label>
                    
        <Field name={name}>
          {({ field }) => {
            return options.map((option,i) => {
              // if(option=='Other'){
              //     return <FormTextComponent key={i} label={option} value={other} {...field} {...rest} />
              // }
              // else{
                return (
                <Form.Group key={i} className='d-flex'>
                  <Form.Check
                    // for={props.fieldName}
                    type='checkbox'
                    id={option+name}
                    {...field}
                    {...rest}
                    // label={option}
                    value={option}
                    className="mb-3 px-3"
                  />
                  <Form.Label htmlFor={option+name}>{option}</Form.Label>
                  {/* <label htmlFor={option}>{option}</label> */}
                </Form.Group>
              )
            })
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </Form.Group>
  )
}

export default CheckBoxGroup = React.memo(CheckBoxGroup);