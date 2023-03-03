import { TableBox } from './TableBox';

export function DataList() {
    const datalist = [
        {
            "id": 0,
            "heading": "FREE",
            "price": "$0/month",
            "user": "Single user",
            "storage": "5GB Storage",
            "public": "Unlimited Public Projects",
            "community": "Community Access",
            "private": "Unlimited Private Projects",
            "support": "Dedicated Phone Support",
            "subdomain": "Free Subdomain",
            "Status": "Monthly Status Reports"
        },
        {
            "id": 1,
            "heading": "PLUS",
            "price": "$9/month",
            "user": "5 Users",
            "storage": "50GB Storage",
            "public": "Unlimited Public Projects",
            "community": "Community Access",
            "private": "Unlimited Private Projects",
            "support": "Dedicated Phone Support",
            "subdomain": "Free Subdomain",
            "Status": "Monthly Status Reports"
        },
        {
            "id": 2,
            "heading": "PRO",
            "price": "$49/month",
            "user": "Unlimited Users",
            "storage": "150GB Storage",
            "public": "Unlimited Public Projects",
            "community": "Community Access",
            "private": "Unlimited Private Projects",
            "support": "Dedicated Phone Support",
            "subdomain": "Unlimited  Free Subdomain",
            "Status": "Monthly Status Reports"
        }
    ];
    return (
        <div className="data-list">
            {datalist.map((dt) => (<TableBox data={dt} />
            ))}
        </div>
    );
}
