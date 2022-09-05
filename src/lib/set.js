import { EMessage } from '../enum';
const set = ({ key, iframe, data }) => new Promise((resolve) => {
    const node = document.createElement('iframe');
    node.src = iframe;
    node.style.display = 'none';
    document.body.appendChild(node);
    window.addEventListener('message', (e) => {
        if (e.data.action === EMessage.MOUNT) {
            node.contentWindow?.postMessage({ action: EMessage.SET, key, data }, iframe);
        }
        if (e.data.action === EMessage.SET) {
            localStorage.setItem(e.data.key, e.data.data);
            document.body.removeChild(node);
            resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
        }
    });
    window.removeEventListener('message', (e) => {
        if (e.data.action === EMessage.MOUNT) {
            node.contentWindow?.postMessage({ action: EMessage.SET, key, data }, iframe);
        }
        if (e.data.action === EMessage.SET) {
            localStorage.setItem(e.data.key, e.data.data);
            document.body.removeChild(node);
            resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
        }
    });
});
export { set };
