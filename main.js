document.getElementById("btn").addEventListener("click", calc);
const render_img = document.getElementById("render_image");

let el_width = document.getElementById("width");
let el_height = document.getElementById("height");
let el_depth = document.getElementById("depth");
let el_ray = document.getElementById("ray");

const el_area = document.getElementById("area");
const el_vol = document.getElementById("vol");

function changeForm(obj) {
  let form;
  if (obj == "cylinder") {
    el_width.disabled = true;
    el_height.disabled = false;
    el_depth.disabled = true;
    el_ray.disabled = false;
    render_img.src = "cylinder.svg";
    form = "cylinder";
  } else if (obj == "cone") {
    el_width.disabled = true;
    el_height.disabled = false;
    el_depth.disabled = true;
    el_ray.disabled = false;
    render_img.src = "cone.png";
    form = "cone";
  } else if (obj == "prism") {
    el_width.disabled = false;
    el_height.disabled = false;
    el_depth.disabled = false;
    el_ray.disabled = true;
    render_img.src = "prism.png";
    form = "prism";
  } else if (obj == "ball") {
    el_width.disabled = true;
    el_height.disabled = true;
    el_depth.disabled = true;
    el_ray.disabled = false;
    render_img.src = "ball.png";
    form = "ball";
  }
}

function calc() {
  const width = Number(el_width.value);
  const height = Number(el_height.value);
  const depth = Number(el_depth.value);
  const ray = Number(el_ray.value);

  if (width > 0 && height > 0 && depth > 0 && ray == 0) {
    let vol_prim = width * height * depth;
    let area_prim =
      2 * (height * width) + 2 * (width * depth) + 2 * (height * depth);
    el_vol.innerHTML = vol_prim.toFixed(2) + "m³";
    el_area.innerHTML = area_prim.toFixed(2) + "m²";
    render_img.src = "prism.png";
  } else if (ray > 0 && height == 0 && width == 0 && depth == 0) {
    let vol_ball = (4 * Math.PI * ray * ray * ray) / 3;
    let area_ball = 4 * Math.PI * ray * ray;
    el_vol.innerHTML = vol_ball.toFixed(2) + "m³";
    el_area.innerHTML = area_ball.toFixed(2) + "m²";
    render_img.src = "ball.png";
  } else if (ray > 0 && height > 0 && width == 0 && depth == 0) {
    let vol_cylinder = Math.PI * ray * ray * height;
    let area_cylinder = 2 * Math.PI * ray * (ray + height);
    el_vol.innerHTML = vol_cylinder.toFixed(2) + "m³";
    el_area.innerHTML = area_cylinder.toFixed(2) + "m²";
    render_img.src = "cylinder.svg";
  } else if (ray > 0 && height > 0 && width == 0 && depth == 0) {
    let vol_cone = (Math.PI * ray * ray * height) / 3;
    let area_cone =
      Math.PI * ray * (ray * Math.sqrt(height * height + ray * ray)); //
    el_vol.innerHTML = vol_cone.toFixed(2) + "m³";
    el_area.innerHTML = area_cone.toFixed(2) + "m²";
    render_img.src = "cone.png";
  }
}
