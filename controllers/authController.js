
export const getAuth = (req, res) => {
    res.send('This is auth');
}

export const currentUser = async (req,res) =>{
    console.log(req.headers.token);
    res.send(req.currentUser);
}

