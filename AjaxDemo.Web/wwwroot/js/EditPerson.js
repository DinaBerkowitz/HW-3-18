$(() => {
    const edit = new bootstrap.Modal($("#edit-modal")[0]);

    $(".table").on('click', '.btn-warning', function () {
            
        const tr = $(this).closest('tr')
        $.get(`/home/getperson?id=${tr.data('id')}`, function (person) {
    

            console.log(person)

            $("#edit-firstName").val(person.firstName)
            $("#edit-lastName").val(person.lastName)
            $("#edit-age").val(person.age)
             $("#edit-id").val(person.id)

        })
        edit.show();

    })


    $("#update").on('click', function () {

            const person = {
                id: $("#edit-id").val(),
                firstName: $("#edit-firstName").val(),
                lastName: $("#edit-lastName").val(),
                age: $("#edit-age").val()
               
            }
            console.log(person)

        $.post('/home/update',person, function () {
      
            edit.hide()
            refreshTable()
        })
    })
 



    function refreshTable() {
        $.get('/home/getpeople', function (people) {
            $("tbody tr").remove();
            people.forEach(person => {
                $("tbody").append(`
<tr data-id="${person.id}">
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.age}</td>
    <td>
        <button class="btn btn-warning col-md-3">Edit</button>
        <button class="btn btn-danger col-md-3">Delete</button>
    </td>
</tr>
`);
            });
        });
    }
})