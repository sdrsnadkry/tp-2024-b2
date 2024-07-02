// [{name: "a"}, {name: "b"}, {name:"c "}]

const dataArray = [];

function handleFormSubmit(event) {
  const contactForm = document.forms["contact-form"];

  event.preventDefault();

  console.log(contactForm);

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;
  const phone = contactForm.phone.value;

  const student = {
    name: name,
    email: email,
    message: message,
    phone: phone,
  };
  dataArray.push(student);

  console.log(dataArray);

  const valueDiv = document.getElementById("form-values");
  valueDiv.innerHTML = "";

  dataArray.forEach(function (item) {
    const div = document.createElement("div");

    div.innerHTML = `<div>
                            <h6 class="title completed">${item.name} <span class="ml-2 badge badge-danger">${item.phone}</span> </h6>
                            <p class="description">${item.message}</p>
                        </div>`;

    valueDiv.appendChild(div);
  });

  contactForm.reset();
}
