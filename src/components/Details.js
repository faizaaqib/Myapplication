import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import axios from "axios";


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useHistory();


    const getdata = async () => {

        const res = await fetch(`/induser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data[0])
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history.push("/");
        }

    }

    // Upload File
    const [files, setFile]= useState(null);
    const [progress, setProgress] = useState({started: false, pc:0});
    const [msg, setMsg] = useState(null);

    function handleUpload(){
        if (!files){
            console.log("No file Selected");
            return;
        }

        const fd= new FormData();
        for (let i=0; i<files.lenght; i++){
            fd.append('file${i+1}',files[i]);

        }
        

        setMsg("Uploading...");
        setProgress(prevState =>{
            return {...prevState, started:true}
        })
        axios.post('http://httpbin.org/post', fd,{
            onUploadProgress: (progressEvent) =>{setProgress(prevState=>{
                return { ...prevState,pc: progressEvent.progress*100}
            })
            },
            headers:{
                "Custom-Header": "value",
            }
        })

        .then(res =>{
            setMsg("Upload Successfully");
            console.log(res.data);
        })
        .catch(err => {
            setMsg("Upload Failed");
            console.error(err);

        });
       
    }


    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>User Detail</h1>

            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata.id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata.id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
                            <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                    <div className='mt-4'>
                <h3 style={{ fontWeight: 350 }}>Upload User Documents</h3>
                
                        <input className="mt-4" onChange={(e)=> {setFile(e.target.files) }} type='file' multiple/>
                        <button onClick={handleUpload} className="btn btn-danger">Upload Document</button>
                        
                        {progress.started && <progress max= "100" value={progress.pc}></progress> }
                        {msg && <span>{msg}</span>}

            </div>

                </CardContent>
            </Card>
        </div>
        


    );
}

export default Details
