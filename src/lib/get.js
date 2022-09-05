import { EMessage } from '../enum';
const get = ({ key, iframe }) => new Promise((resolve) => {
    const node = document.createElement('iframe');
    node.src = iframe;
    node.style.display = 'none';
    document.body.appendChild(node);
    window.addEventListener('message', (e) => {
        if (e.data.action === EMessage.MOUNT) {
            node.contentWindow?.postMessage({ action: EMessage.GET, key }, iframe);
        }
        if (e.data.action === EMessage.GET) {
            if (e.data.data !== null) {
                localStorage.setItem(e.data.key, e.data.data);
            }
            document.body.removeChild(node);
            resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
        }
    });
    window.removeEventListener('message', (e) => {
        if (e.data.action === EMessage.MOUNT) {
            node.contentWindow?.postMessage({ action: EMessage.GET, key }, iframe);
        }
        if (e.data.action === EMessage.GET) {
            if (e.data.data !== null) {
                localStorage.setItem(e.data.key, e.data.data);
            }
            document.body.removeChild(node);
            resolve({ key: e.data.key, data: e.data.data, message: e.data.message });
        }
    });
});
export { get };
