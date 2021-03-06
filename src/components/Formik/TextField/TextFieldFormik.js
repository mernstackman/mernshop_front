import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import TextField from "./TextField";

const TexfieldFormik = ({ children, ...props }) => {
    return (
        <Field {...props} component={TextField}>
            {children}
        </Field>
    );
};

TexfieldFormik.propTypes = {
    children: PropTypes.node,
};

export default TexfieldFormik;
