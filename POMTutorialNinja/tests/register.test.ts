import {test,expect} from '../fixtures/baseFixtures';
import {readRegData,registerUser} from '../utils/csvReader';
const users:registerUser[]=readRegData();
const validsuer=users.find(user=>user.type === "register");
test('Register',async({registerPage})=>{
    if(!validsuer){
        throw new Error ("Valid not found");
    }
    await registerPage.register(
        validsuer.fname,
        validsuer.lname,
        validsuer.email,
        validsuer.tele,
        validsuer.password,
        validsuer.passconfirm
    )
})