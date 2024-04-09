

$(() => {

    $(".table").on('click', '.btn-danger', function () {
        const tr = $(this).closest('tr')

        $.post(`/home/delete?id=${tr.data('id')}`, function () {
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
});