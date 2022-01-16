import { readFile, writeFile } from 'fs/promises'
import fetch  from 'node-fetch';

export const readConfig = async (pathname) => {
    const rawData = await readFile(pathname, 'utf-8');
    return JSON.parse(rawData);
};

const ipoteka = await readConfig('./ipoteka.json')
const credity = await readConfig('./credits.json')
const insurance = await readConfig('./insurance.json')
const biznes = await readConfig('./biznes-kredity.json')

const organizationIds = new Set(credity.items.concat(ipoteka.items, biznes.organizations).map((i) => (i._id || i.id)))


const organization = credity.items.concat(ipoteka.items, biznes.organizations).reduce((out, o) => {
        const id = o._id || o.id
        if (organizationIds.has(id)) {
            organizationIds.delete(id)
            const name = o.name?.short || o.name
            out.push({
                id,
                name,
            })
        }

        return out
    }, [])

console.log(organization.map(o => o.id))
writeFile('ids.txt', organization.reduce((out, o) => {
    out += `"${o.id}",\n`
    return out
}, ''))
// const getLogo = async () => {
//     try {
//         const respons = await fetch(`http://organizations.svc.master.qa.sravni-team.ru/v1/public/organizations/cross/ids/`, {
//             method: "POST",
//             body: {
//                 ids: organization.map(o => o.id),
//                 select: [
//                     "name.short",
//                     "_id",
//                     "logotypes.square"
//                 ]
//             }
//         });
//         const data = await respons.json();
//
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }
// // writeFile("organizations.txt", organization)
//
// console.log(Object.keys(insurance.organizations).length)

// console.log(organizationLogo)
//getLogo()
