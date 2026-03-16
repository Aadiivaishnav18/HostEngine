import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {

    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

  }, [])

  const login = (email) => {

    const userData = { email }

    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)

  }

  const register = (email) => {

    const userData = { email }

    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)

  }

  const logout = () => {

    localStorage.removeItem("user")
    setUser(null)

  }

  const getInitials = (email) => {

    if (!email) return ""

    const name = email.split("@")[0]

    return name
      .split(".")
      .map(n => n[0])
      .join("")
      .toUpperCase()

  }

  return (

    <AuthContext.Provider value={{ user, login, register, logout, getInitials }}>

      {children}

    </AuthContext.Provider>

  )

}

export const useAuth = () => useContext(AuthContext)