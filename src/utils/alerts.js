import swal from "sweetalert";

export const Alert = (title, text, icon)=>{
    swal({
        title,
        text,
        icon,
        button: "متوجه شدم",
    });
}