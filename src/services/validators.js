export const emailVefication = {
    required: `this field is required`,
    pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: `must be valid email`,
    },
}
export const usernameValidation = {
    required: "this field is required",
    pattern: {
        value: /^(?=[a-zA-Z])[a-zA-Z0-9_.-]{3,10}$/,
        message: "Must be 3-10 characters starting with a letter (a-z, A-Z, 0-9, _, ., -)"
    },
    minLength: {
        value: 3,
        message: "Minimum 3 characters"
    },
    maxLength: {
        value: 10,
        message: "Maximum 10 characters"
    }
};
export const countryVerfication = {
    required: "this field is required",
    pattern: {
        value: /^[A-Z][a-zA-Z\s]*$/,
        message: `Country must start with a capital letter and contain only letters`,
    }

}
export const phoneNumberVefication = {
    required: "this field is required",
    pattern: {
        value: /^(\+44|0)\d{9,10}$/,
        message: `must be Valid UK number!`,
    }

}
export const jopVefication =

{
    required: "this field is required ",
    pattern: {
        value: /^[a-zA-Z\s\-]{3,10}$/,
        message: "Job title must contain 3-10 English letters (spaces and hyphens allowed)"
    }
}
export const nameVefication =

{
    required: "This field is required",
    pattern: {
        value: /^(?=.*[A-Za-z])[A-Za-z ]{3,10}$/,
        message: "Must be English letters"
    },
    minLength: {
        value: 3,
        message: "Minimum 3 characters"
    },
    maxLength: {
        value: 10,
        message: "Maximum 10 characters"
    }
}
export const ageVefication =

{
    required: "Age is required",
    pattern: {
        value: /^(1[0-2][0-9]|[1-9][0-9]|[1-9])$/,
        message: "Please enter a valid age (1-129)"
    },
    min: {
        value: 1,
        message: "Minimum age is 1"
    },
    max: {
        value: 129,
        message: "Maximum age is 129"
    }
}
export const dateVefication =

{
    required: "Date is required",
    pattern: {
      value: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/,
      message: "Use DD/MM/YYYY format (e.g. 20/2/2002 or 20/02/2002)"
    },
    validate: {
      validDate: (value) => {
        const [day, month, year] = value.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        return (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        ) || "Invalid calendar date";
      },
      notFuture: (value) => {
        const [day, month, year] = value.split('/').map(Number);
        const inputDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return inputDate <= today || "Date cannot be in the future";
      }
    }
  }
  export const maritalStatusValidation = {
    required: "Marital status is required",
    pattern: {
      value: /^(Single|Married|Divorced|Widowed|Separated)$/i,
      message: "Please enter: Single, Married, Divorced, Widowed, or Separated"
    }
  }