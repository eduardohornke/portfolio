document.querySelector(".hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));

const images = [
    { 'id': '1', 'url':'https://user-images.githubusercontent.com/25671369/164034316-a53d8fc0-89eb-416f-9bca-430530d2fde6.gif' },
    { 'id': '2', 'url':'https://user-images.githubusercontent.com/25671369/165019068-4d501b98-d049-45c6-923c-a2fd9db2342a.gif' },
    { 'id': '3', 'url':'https://user-images.githubusercontent.com/25671369/165155354-9031bd4a-6683-4594-bf70-a25394866205.gif' },
    { 'id': '4', 'url':'https://user-images.githubusercontent.com/25671369/165216838-30ec7146-4cd9-4a0f-ab6c-d9625a71fc4e.gif' },
    { 'id': '5', 'url':'https://user-images.githubusercontent.com/25671369/165584537-59032342-b749-418d-a1d0-c8a3be30bc9b.gif' },
    { 'id': '6', 'url':'https://user-images.githubusercontent.com/25671369/165655492-52db8e07-aba5-4df5-86e8-58e52931dbb3.gif' },
    { 'id': '7', 'url':'https://user-images.githubusercontent.com/25671369/165995318-35790b14-5c31-408a-b7ec-31f37407dba9.gif' },
    { 'id': '8', 'url':'https://user-images.githubusercontent.com/25671369/173703493-480c9d66-2eed-469e-95e7-3c87751cf4fe.gif' },
    { 'id': '9', 'url':'https://user-images.githubusercontent.com/25671369/165146436-2dd9cb4c-b4c5-4227-948b-d6a584dc22d0.gif' },
    { 'id': '10', 'url':'https://user-images.githubusercontent.com/25671369/165180879-ab9efd7e-1a1b-4ca9-979c-115b47754dff.gif' },
    { 'id': '11', 'url':'https://user-images.githubusercontent.com/25671369/169875876-ea973650-9b4b-4117-9b52-18d322792f42.gif' },
    { 'id': '12', 'url':'https://user-images.githubusercontent.com/25671369/169628947-9b3f9b11-021c-4c2e-82e1-6f802bb67b7e.png' },
    { 'id': '13', 'url':'https://user-images.githubusercontent.com/25671369/169593645-bb6dc256-f6f5-48e9-aff1-30ac3caa0f36.gif' },
    { 'id': '14', 'url':'https://user-images.githubusercontent.com/25671369/169423208-71d3d1a0-5673-46f4-b4f7-c4ecb895adb3.gif' },
    { 'id': '15', 'url':'https://user-images.githubusercontent.com/25671369/169407428-4a51730c-e6fe-4b2e-a125-29f37d2e40fe.gif' },
    { 'id': '16', 'url':'https://user-images.githubusercontent.com/25671369/168925553-eba1a48f-8b02-4af6-af56-e89ae2f65365.gif' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);