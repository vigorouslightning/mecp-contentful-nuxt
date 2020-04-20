import helpers from '@/helpers';

export default {
    inlines_entry_hyperlink(node, content) {
        let path = helpers.url.urlBuilder(node.data.target.fields);
        return `<a href="${path}">${content}</a>`;
    },
}