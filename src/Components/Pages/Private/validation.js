export default (formData) => {
    const err = {};
    for (const pair of formData.entries())
        if (!pair[1]) err[pair[0]] = `${pair[0]} is required field!`;
    return err;
};