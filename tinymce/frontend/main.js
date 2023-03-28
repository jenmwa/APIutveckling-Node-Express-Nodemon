console.log('we´re connected!');

const saveBtn = document.querySelector('#saveBtn');

tinymce.init({
    selector: '#textContent',
    plugins: 'code',
    toolbar: 'undo redo | forecolor backcolor | styleselect bold italic | alignleft aligncenter alignright | code',
    setup: function(editor) {
        editor.on('change', function() {
            editor.save();
        })
    },
});



saveBtn.addEventListener('click', () => {
    console.log(document.querySelector('#textContent').value)
})

const publishedContent = document.querySelector('#publishedContent');
publishedContent.innerHTML = document.querySelector('#textContent').value;