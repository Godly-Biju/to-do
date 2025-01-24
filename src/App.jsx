import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Table from 'react-bootstrap/Table';
import { Button, Modal } from 'react-bootstrap';
import { getAPI, saveAPI } from './services/allAPI';



function App() {


  const [data,setdata] = useState([])

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[Details,setDetails]= useState({
      title:"",description:"",deadline:"",priority:"",status:""
     })

  useEffect(()=>{
      get()
      
  },[])


  const get = async () =>{
      try{
          const result = await getAPI()
          if(result.status >= 200 && result.status < 300){
              setdata(result.data)
              console.log(result.data);
               
              
          }
      }catch(err){
          console.log(err);
          
      }
  }

    const handleUploadVideo = async() =>{
      const {title,description,deadline,priority,status} = Details
        
        
        
        if (title && description && deadline && priority && status){
            // Store permanently
            try {
                const result = await saveAPI(Details) 
                    if(result.status>=200 && result.status<300){
                        alert("Book Uploaded successfully !!")
                        handleClose()
                    }
                    else{
                        console.log(result);
                        
                    }
                
                
            } catch (err) {
                console.log(err);
                
            }
           
        }
        else{
            alert("Please fill the form")
        }

    }

  return (
    <>
      {/* navbar */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TO-DO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* ADD */}
      <h3 style={{display:'inline'}} className='ms-2 ps-5 text-warning fw-bolder fs-1'>Upload new video</h3>
      <button onClick={handleShow} className='btn rounded-circle bg-warning ms-3 mb-2'><i class="fa-solid fa-plus"></i></button>
          
          
          <div>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title>Upload new video</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                  <input onChange={e=>setDetails({...Details,title:e.target.value})} placeholder='Title' className='m-2 w-75 p-2' type="text" /><br />
                  <input onChange={e=>setDetails({...Details,description:e.target.value})} placeholder='Description' className='m-2 w-75 p-2' type="text" /><br />
                  <input onChange={e=>setDetails({...Details,deadline:e.target.value})} placeholder='Deadline' className='m-2 w-75 p-2' type="text" /><br />
                  <input onChange={e=>setDetails({...Details,priority:e.target.value})} placeholder='Priority Level' className='m-2 w-75 p-2' type="text" /><br />
                  <input onChange={e=>setDetails({...Details,status:e.target.value})} placeholder='Complettion Status' className='m-2 w-75 p-2' type="text" /><br />

                      
                  
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Cancel
                  </Button>
                  <Button onClick={handleUploadVideo} variant="primary" >
                      Upload
                  </Button>
                  </Modal.Footer>
              </Modal>
          </div>

      {/* Table */}
      <Table responsive className='mt-5 table-bordered ' >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority Level</th>
            <th>Completion Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          data?.map(data=>(
            <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.deadline}</td>
            <td>{data.priority}</td>
            <td>{data.status}</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-delete-left"></i></td>

          </tr>
          ))
        }
        <tr>
          <td>1</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
            
          ))}
          <td><i class="fa-solid fa-pen-to-square"></i></td>
          <td><i class="fa-solid fa-delete-left"></i></td>
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><i class="fa-solid fa-pen-to-square"></i></td>
          <td><i class="fa-solid fa-delete-left"></i></td>
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><i class="fa-solid fa-pen-to-square"></i></td>
          <td><i class="fa-solid fa-delete-left"></i></td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

export default App
