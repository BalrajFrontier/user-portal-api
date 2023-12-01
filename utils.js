const validate = (req) => {
        let error = false;
        let errorMessage = ''
        if(req?.body?.firstName?.length > 100){
            error = true;
            errorMessage = 'First name can not exceed 100 characters'
        } else if (!/^[A-Za-z]+$/.test(req?.body?.firstName)){
            error = true;
            errorMessage = 'Invalid First name'
        }
        if(req?.body?.lastName?.length > 100){
            error = true;
            errorMessage = 'Last name can not exceed 100 characters'
        } else if (!/^[A-Za-z]+$/.test(req?.body?.lastName)){
            error = true;
            errorMessage = 'Invalid Last name'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req?.body?.email)){
            error = true;
            errorMessage = 'Invalid Email'
        }
        return {error: error, errorMessage: errorMessage}
}

module.exports = validate;