function start()
{
    url = document.URL
    studentID = url.substring(url.lastIndexOf("/") + 1);
    document.getElementById("comprobar").innerHTML = "Escribiste tu matricula bien? '" + studentID + "'"
}