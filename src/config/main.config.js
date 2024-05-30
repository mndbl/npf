export const API_URL = 'http://new-project-back.test/api'
export const registers_URL = `${API_URL}/data/registers`
export const accounts_URL = `${API_URL}/data/settings/accounts`
export const accounts_categories_URL = `${API_URL}/data/settings/account-categories`
export const avatar_URL = `${API_URL}/user/avatar`

export const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: 'usd',
    maximumFractionDigits: 2,
});