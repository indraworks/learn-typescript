import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

//dgn ts kita declare type smua variable data yg mau difetch dari server
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
//axios mrupan promise tangkap response stlahnya keluarkan data
axios.get(url).then((response) => {
  //console.log(response.data);
  //response.data have properties of Userid,Id,title,completed
  const todo = response.data as Todo;

  //disamain sama interface diatas
  const Id = todo.id;
  const Title = todo.title;
  const Completed = todo.completed;

  // console.log(`the TODO with id :${id}s
  //         the title of  todo :${Title}
  //         the result of todo :${Completed}`);

  //kita buat funvgsi sekarang tapi kita tukar function nya
  //nanti lihat errornya apa ya??
  toDoConsoleLog(Id, Title, Completed); //panggil functionya disini
});
//declare dulu functionnya disini
const toDoConsoleLog = (Id: number, Title: string, Completed: boolean) => {
  console.log(`the TODO with id :${Id}
             the title of  todo :${Title}
            the result of todo :${Completed}`);
};
