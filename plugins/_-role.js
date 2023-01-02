const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'New Member': 0,
    'Bronze': 3,
    'Beginner': 9,
    'Liker': 13,
    'Elite': 18,
    'Younger member': 22,
    'Banger': 30,
    'Bester': 36,
    'Subscriber': 43,
    'The older': 50,
    'Bo(d)er': 58,
    'Diamonder': 67,
    'The best member': 75,
    'Peakord': 87,
    'King': 100,
    'Richer king': 115,
    'Best botter king': 135,
    'Angel': 150,
    'Co-dev': 175,
    'Phoenix': 250,
    'Developer': 10000,
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}
