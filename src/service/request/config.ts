let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV === "development") {
  // 配置了代理
  BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://152.136.185.210:5000"
} else {
  BASE_URL = "/api"
}

export { BASE_URL, TIME_OUT }

// 盲点：
// 1.process.env.NODE_ENV不会拼
