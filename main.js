// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


// -------- Your Code Goes Below this Line --------

//Step 1. What do we need to do? We need to create a form
//Step 2. Where does the form need to go? We're told that the form will be placed under "fields". 
//Step 3. How do we get the form inside "fields"? Fields is both a class and id, we can pull the node by "query.Selector or getElementById" and give it a variable

					/*getElementById , notice the #*/
let fields = document.querySelector ('#fields')

//Step 4. Now that we are "inside" the "fields" node, what do we do? We determined in step 1. that we are creating a form. The form needs a variable in which information will be plugged.


let htmlStr='<form>'

//Step 5. What information is needed? Model shows we need: First Name, Last Name, Email, URL, Language, Comment section, Mobile Number, and Home Number.
//Step 6. How do we get that information into the 'form'? 

formData.forEach(function(item){
  if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
    htmlStr += `<input type="${item.type}" placeholder="${item.label}" id="${item.id}" />`

// the forEach loop has searched all objects in the array. We are now looking at all the values inside "type". email, tel, and text can be addressed together. 'Placeholder' is the grayed out text inside each text field.

  }
  if (item.type === 'textarea') {
  	htmlStr += `<textarea id="${item.id}" placeholder="${item.label}"></textarea> `

 //'textarea' tells us it will need a text box. 

  }
  if (item.type === 'select') {
 //'select' will need a dropdown menu followed by the contained items. Refer to HTML code. 
  	htmlStr += `<select id="${item.id}">`
  	htmlStr += `<option value="">${item.label}</option>`
  	item.options.forEach(function(option) {

 // forEach loop is needed to loop through the array under Select:Options. We need to see both value & label.

  		htmlStr += `<option value"${option.value}">${option.label}</option>`
  	})
  	htmlStr += '</select>'
  	}
  })
htmlStr += '</form>'

fields.innerHTML = htmlStr

 




