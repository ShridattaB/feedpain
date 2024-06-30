import axios from "axios";
import { getUserData } from "../../../Utils";
export const getFeedback = async () => {
    const res = await axios.get("/feedback/");
    if (res.status === 200) {
        const { data, status } = res?.data;
        if (status === "Success") {
            return data || [];
        }
    }
}
export const createFeedback = async (data) => {
    const bodyContent = {};
    const uploadPromises = [];
    let attCount = 0;

    for (const pair of data.entries()) {
        if (pair[0] === "attachment") {
            const uploadPromise = uploadImage(pair[1], attCount++).then(url => {
                return { key: pair[0], url };
            });
            uploadPromises.push(uploadPromise);
        } else {
            bodyContent[pair[0]] = pair[1];
        }
    }

    const uploadResults = await Promise.all(uploadPromises);

    uploadResults.forEach(result => {
        if (!bodyContent[result.key]) {
            bodyContent[result.key] = [];
        }
        bodyContent[result.key].push(result.url);
    });
    // Stringify the attachment array if it exists
    if (bodyContent["attachment"]) {
        bodyContent["attachment"] = JSON.stringify(bodyContent["attachment"]);
    }
    const res = await axios.post("/feedback/save", bodyContent);
    if (res.status === 200) {
        const { data, status } = res?.data;
        if (status === "Success") {
            return data;
        }
    }
}


export const uploadImage = async (data, count) => {
    const { firstname, lastname } = getUserData()
    let formData = new FormData();
    formData.append(
        "name", "feedback" + firstname + lastname +
        new Date()
            .toUTCString()
            .replaceAll(" ", "")
            .replaceAll(":", "")
            .replaceAll(",", "") + `_${count}`
    );
    formData.append("file", data);
    const response = await axios.post("/public/upload", formData);
    return await response?.data?.value;
}
export const getComplaint = async () => {
    const res = await axios.get("/complaint/");
    if (res && res.status === 200) {
        const { data, status } = res?.data;
        if (status === "Success") {
            return data || [];
        }
    }
}
export const createComplaint = async (data) => {
    const bodyContent = {};
    const uploadPromises = [];
    let attCount = 0;

    for (const pair of data.entries()) {
        if (pair[0] === "attachment") {
            const uploadPromise = uploadImage(pair[1], attCount++).then(url => {
                return { key: pair[0], url };
            });
            uploadPromises.push(uploadPromise);
        } else {
            bodyContent[pair[0]] = pair[1];
        }
    }

    const uploadResults = await Promise.all(uploadPromises);

    uploadResults.forEach(result => {
        if (!bodyContent[result.key]) {
            bodyContent[result.key] = [];
        }
        bodyContent[result.key].push(result.url);
    });
    // Stringify the attachment array if it exists
    if (bodyContent["attachment"]) {
        bodyContent["attachment"] = JSON.stringify(bodyContent["attachment"]);
    }
    const res = await axios.post("/complaint/save", bodyContent);
    if (res.status === 200) {
        const { data, status } = res?.data;
        if (status === "Success") {
            return data;
        }
    }
}
export const getListOfUsers = async () => {
    const res = await axios.get("/user/");
    if (res.status === 200) {
        const { data, status } = res?.data;
        if (status === "Success") {
            return data;
        }
    }
}
export const changeRoleAPI = async (data) => {
    return await axios.post("/user/change-role", data);
}
export const blockUnBlock = async (userId) => {
    return await axios.get("/user/block-unblock?userId" + userId);
}