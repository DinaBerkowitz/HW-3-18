

$(() => {

    const add = new bootstrap.Modal($("#add-modal")[0]);


    refreshTable();

    $("#show-add").on('click', function () {
        $("#firstName").val('');
        $("#lastName").val('');
        $("#age").val('');
        add.show();
    });

    $("#save-person").on('click', function () {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const age = $("#age").val();

        $.post('/home/addperson', { firstName, lastName, age }, function () {
            add.hide();
            refreshTable();
        });


    });



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
});






