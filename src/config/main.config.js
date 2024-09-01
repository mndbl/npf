export const API_URL = 'http://new-project-back.test/api'
export const registers_URL = `${API_URL}/data/registers`
export const accounts_URL = `${API_URL}/data/settings/accounts`
export const accounts_categories_URL = `${API_URL}/data/settings/account-categories`
export const admin_URL = `${API_URL}/data/admin`
export const consults_URL = `${API_URL}/data/consults`
export const avatar_URL = `${API_URL}/user/avatar`

export const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: 'usd',
    maximumFractionDigits: 2,
});

export const months = [
    {
        name: 'jan',
        digit: 1
    },
    {
        name: 'feb',
        digit: 2
    },
    {
        name: 'mar',
        digit: 3
    },
    {
        name: 'apr',
        digit: 4
    },
    {
        name: 'may',
        digit: 5
    },
    {
        name: 'jun',
        digit: 6
    },
    {
        name: 'jul',
        digit: 7
    },
    {
        name: 'aug',
        digit: 8
    },
    {
        name: 'sep',
        digit: 9
    },
    {
        name: 'oct',
        digit: 10
    },
    {
        name: 'nov',
        digit: 11
    },
    {
        name: 'dec',
        digit: 12
    },
]