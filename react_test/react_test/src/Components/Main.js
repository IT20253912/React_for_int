function Main({name , position , city}){
    // console.log(city);
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiN_J0bIU38iblibITf_o9iekv4d2dGRNmQ&usqp=CAU" alt="card" />
            <h3>{name}</h3>
            <p><span>{position}</span><span>{city}</span></p>
           
        
        </div>
    );


}
export default Main;