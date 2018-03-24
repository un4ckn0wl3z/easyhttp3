class EasyHTTP {

  // GET
  async get(url){
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  // POST
  async post(url,data){

      const res = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      return resData;
 
  }

  //PUT
  async put(url,data){
  
    const res = await fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      return resData;
  }

  //DELETE
  async delete(url){
   
    const res = await fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });

      const resData = await 'Resource Deleted!';
      return resData;

  }
}