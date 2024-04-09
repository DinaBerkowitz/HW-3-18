using AjaxDemo.Data;
using AjaxDemo.Web.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AjaxDemo.Web.Controllers
{
    public class HomeController : Controller
    {


        private string _connectionString = @"Data Source=.\sqlexpress; Initial Catalog=HomeWork;Integrated Security=True;";

        public IActionResult Index()
        {

            return View();
         
        }

        public IActionResult GetPeople()
        {

            var repo = new PeopleRepository(_connectionString);
            List<Person> people = repo.GetAll();
            return Json(people);
        }

        [HttpPost]
        public IActionResult AddPerson(Person p)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(p);
            return Json(p);
        }


        public IActionResult GetPerson(int id)
        {


            var repo = new PeopleRepository(_connectionString);

            return Json(repo.GetById(id));
        }

        [HttpPost]
        public IActionResult Update(Person p)
        {

            PeopleRepository repo = new PeopleRepository(_connectionString);
            repo.Update(p);
            return Json(p);
        }


        [HttpPost]
        public IActionResult Delete(int id)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Delete(id);
            return Json(repo.GetAll());
        }


    }
}