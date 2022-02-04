let preview_svg = document.querySelector("#preview_svg");

let global_drag_state = {
    active: false
};

document.addEventListener("mousemove", e => {
    if(!global_drag_state.active)
        return;
});

document.addEventListener("mouseup", e => {
    if(!global_drag_state.active)
        return;
    global_drag_state.active = false;
});

preview_svg.addEventListener("mousedown", e => {
    global_drag_state.active = true;
});

let preview_img = preview_svg.querySelector("image");

const EMPTY = "";
let picture = EMPTY;
function set_upload_picture() {
    if(picture != EMPTY) {
        URL.revokeObjectURL(picture);
    }
    picture = EMPTY;
    if(pic_upload.files.length >= 1) {
        picture = URL.createObjectURL(pic_upload.files[0]);
    }
    preview_img.setAttribute("href", picture);
}

preview_img.addEventListener("load", () => {
    let r = preview_img.getClientRects()[0];
    let scale;
    if(r.width < r.height) {
        scale = 500 / r.width;
    } else {
        scale = 500 / r.height;
    }
    preview_img.setAttribute("transform", `scale(${scale})`);
});

let pic_upload = document.querySelector("#pic_upload");
pic_upload.addEventListener("change", set_upload_picture);
