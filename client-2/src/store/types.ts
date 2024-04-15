export interface Credentials {
    login: string;
    password: string;
}

export interface LogsTime {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  }

  export interface LoginData {
    message: string;
    token: string;
  }

  export interface InitialStateLoginData {
    loginLoading: boolean,
    loginError: string,
    loginData: LoginData | null
}

export interface DataLogs {
    id: number,
    date: string,
    time: string,
    description: string
}

export interface LogsApi {
    loadingLogs: boolean;
    errorLogs: string;
    dataLogs: DataLogs[] | null
}