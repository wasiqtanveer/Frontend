
//function to get user data
function getUser(id)
{
    return new Promise((resolve,reject) => 
    {
        setTimeout(()=>
        {
            resolve(
                {
                    id,
                    name: "John Doe",
                    age: 30
                }
            )
        },2000)
    })
}


// Function to get user posts
function getPosts(userId)
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            if(userId!==1)
            {
                reject(new Error("Invalid User ID"))
            }

            else
            resolve(
                {
                    posts:
                    [
                        "Post 1",
                        "Post 2",
                    ]
                }
            )
        },2000)
    })
}


// chaining the calls

getUser(1).then((user) =>
{
    console.log("User Fetched",user);
    return getPosts(user.id);
}).then((posts)=>
{
    console.log("User posts",posts);
}).catch(error =>
{
    console.log("Error:",error.message);
}).finally(()=>
{
    console.log("Promise settled");
})
