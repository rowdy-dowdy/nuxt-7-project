import jwt from "jsonwebtoken"
const token_key = process.env.TOKEN_KEY || ""

const verifyToken = (token: string) => {
  try {
    const decode : any = jwt.verify(token, token_key);

    return decode
    
  } catch (err) {
    return null
  }
};

const signToken = async (data: {id: number, name: string, email: string}, time = '1h') => {
  try {
    const token = await jwt.sign({
      id: data.id,
      name: data.name,
      email: data.email
    }, token_key, { expiresIn: time })

    return token

  } catch (err) {
    // console.log(err)
    throw {
      status: 500,
      text: "Not created jwt token"
    }
  }
};

export {
  verifyToken,
  signToken
}