import * as Effect from "effect/Effect";
import type { SchemaError } from "effect/Schema";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
export type GetAccessTokenDto = {
    readonly "grant_type": "client_credentials" | "refresh_token";
    readonly "client_id": string;
    readonly "client_secret": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetAccessTokenDto: Schema.StructWithRest<Schema.Struct<{
    readonly grant_type: Schema.Literals<readonly ["client_credentials", "refresh_token"]>;
    readonly client_id: Schema.String;
    readonly client_secret: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type RefreshAccessTokenPublicApiDto = {
    readonly "grant_type": "client_credentials" | "refresh_token";
    readonly "refresh_token": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const RefreshAccessTokenPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly grant_type: Schema.Literals<readonly ["client_credentials", "refresh_token"]>;
    readonly refresh_token: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetAccessTokenResponseDto = {
    readonly "access_token": string;
    readonly "token_type": string;
    readonly "expires_in": number;
    readonly "refresh_token": string;
    readonly "scope": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetAccessTokenResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly access_token: Schema.String;
    readonly token_type: Schema.String;
    readonly expires_in: Schema.Number;
    readonly refresh_token: Schema.String;
    readonly scope: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiErrorResponseDto = {
    readonly "code": "invalid_request" | "unauthorized_request" | "insufficient_funds" | "forbidden_action" | "not_found" | "conflict" | "server_error" | "service_unavailable";
    readonly "message": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PublicApiErrorResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.Literals<readonly ["invalid_request", "unauthorized_request", "insufficient_funds", "forbidden_action", "not_found", "conflict", "server_error", "service_unavailable"]>;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type BalanceResponseDto = {
    readonly "amount": number;
    readonly "currency": "usd" | "eur";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const BalanceResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Os = {
    readonly "id": string;
    readonly "image_type": string;
    readonly "name": string;
    readonly "is_default": boolean;
    readonly "details": ReadonlyArray<string>;
    readonly "category": string;
    readonly "is_cluster": boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const Os: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly image_type: Schema.String;
    readonly name: Schema.String;
    readonly is_default: Schema.Boolean;
    readonly details: Schema.$Array<Schema.String>;
    readonly category: Schema.String;
    readonly is_cluster: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AuditLogResponseDto = {
    readonly "specversion": string;
    readonly "id": string;
    readonly "source": string;
    readonly "type": string;
    readonly "subject": string;
    readonly "time": string;
    readonly "data": {
        readonly [x: string]: Schema.Json;
    };
} & {
    readonly [x: string]: Schema.Json;
};
export declare const AuditLogResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly specversion: Schema.String;
    readonly id: Schema.String;
    readonly source: Schema.String;
    readonly type: Schema.String;
    readonly subject: Schema.String;
    readonly time: Schema.String;
    readonly data: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DownloadAuditLogParamsDto = {
    readonly "action"?: "other" | "create" | "start" | "start_complete" | "shutdown_complete" | "shutdown" | "delete" | "delete_complete" | "attach" | "attach_complete" | "detach" | "detach_complete" | "clone" | "resize" | "rename" | "transfer" | "trash" | "trash_complete" | "restore" | "cancel" | "provisioning" | "running" | "configure_spot" | "authenticate" | "expire" | "accept" | "update_role" | "revoke" | "login" | "logout" | "login_failed" | "auth_mfa_enable" | "auth_mfa_disable" | "auth_mfa_challenge" | "auth_mfa_verify" | "password_reset" | "complete" | "redeem" | "suspend" | "unsuspend" | "approve" | "decline" | "update" | "rotate_secret" | "disable" | "enable";
    readonly "object_type"?: "compute" | "volume" | "ssh_key" | "invite" | "user" | "member" | "cloud_api_credential" | "object_storage_bucket" | "object_storage_key_pair" | "custom_image" | "startup_script" | "topup" | "coupon" | "bank_transfer" | "bank_transfer_account" | "balance" | "other" | "object_storage" | "quota_request" | "webhook" | "auto_top_up";
    readonly "start_date"?: string;
    readonly "end_date"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DownloadAuditLogParamsDto: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.optionalKey<Schema.Literals<readonly ["other", "create", "start", "start_complete", "shutdown_complete", "shutdown", "delete", "delete_complete", "attach", "attach_complete", "detach", "detach_complete", "clone", "resize", "rename", "transfer", "trash", "trash_complete", "restore", "cancel", "provisioning", "running", "configure_spot", "authenticate", "expire", "accept", "update_role", "revoke", "login", "logout", "login_failed", "auth_mfa_enable", "auth_mfa_disable", "auth_mfa_challenge", "auth_mfa_verify", "password_reset", "complete", "redeem", "suspend", "unsuspend", "approve", "decline", "update", "rotate_secret", "disable", "enable"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume", "ssh_key", "invite", "user", "member", "cloud_api_credential", "object_storage_bucket", "object_storage_key_pair", "custom_image", "startup_script", "topup", "coupon", "bank_transfer", "bank_transfer_account", "balance", "other", "object_storage", "quota_request", "webhook", "auto_top_up"]>>;
    readonly start_date: Schema.optionalKey<Schema.String>;
    readonly end_date: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DownloadAuditLogResponseDto = {
    readonly "url": string;
    readonly "expires_at": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DownloadAuditLogResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly url: Schema.String;
    readonly expires_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ActivityVolumeDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "created_at": string;
    readonly "gb": number;
    readonly "is_shared_fs": boolean;
    readonly "template_type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
    readonly "location_code": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ActivityVolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly gb: Schema.Number;
    readonly is_shared_fs: Schema.Boolean;
    readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location_code: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ActivityComputeDto = {
    readonly "id": string;
    readonly "hostname": string;
    readonly "compute_type": string;
    readonly "is_cluster": boolean;
    readonly "ip"?: string;
    readonly "os_volume_id"?: string;
    readonly "location_code"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ActivityComputeDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly hostname: Schema.String;
    readonly compute_type: Schema.String;
    readonly is_cluster: Schema.Boolean;
    readonly ip: Schema.optionalKey<Schema.String>;
    readonly os_volume_id: Schema.optionalKey<Schema.String>;
    readonly location_code: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type TagResponseDto = {
    readonly "id": string;
    readonly "key": string;
    readonly "value": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const TagResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly key: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PerformVolumeActionPublicDto = {
    readonly "action": "attach" | "detach" | "delete" | "rename" | "resize" | "restore" | "clone" | "cancel" | "create" | "export" | "transfer";
    readonly "id": string | ReadonlyArray<string>;
    readonly "size"?: number;
    readonly "instance_id"?: string;
    readonly "instance_ids"?: ReadonlyArray<string>;
    readonly "name"?: string;
    readonly "type"?: string;
    readonly "is_permanent"?: boolean;
    readonly "location_code"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PerformVolumeActionPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["attach", "detach", "delete", "rename", "resize", "restore", "clone", "cancel", "create", "export", "transfer"]>;
    readonly id: Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>;
    readonly size: Schema.optionalKey<Schema.Number>;
    readonly instance_id: Schema.optionalKey<Schema.String>;
    readonly instance_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly type: Schema.optionalKey<Schema.String>;
    readonly is_permanent: Schema.optionalKey<Schema.Boolean>;
    readonly location_code: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type TagDto = {
    readonly "key": string;
    readonly "value"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const TagDto: Schema.StructWithRest<Schema.Struct<{
    readonly key: Schema.String;
    readonly value: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeleteVolumePublicDto = {
    readonly "is_permanent"?: boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeleteVolumePublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly is_permanent: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumeType = {
    readonly "type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
    readonly "price": {
        readonly [x: string]: Schema.Json;
    };
    readonly "is_shared_fs": boolean;
    readonly "burst_bandwidth": number;
    readonly "continuous_bandwidth": number;
    readonly "internal_network_speed": number;
    readonly "iops": string;
    readonly "throughput_gbps": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const VolumeType: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly price: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly is_shared_fs: Schema.Boolean;
    readonly burst_bandwidth: Schema.Number;
    readonly continuous_bandwidth: Schema.Number;
    readonly internal_network_speed: Schema.Number;
    readonly iops: Schema.String;
    readonly throughput_gbps: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PerformInstanceActionPublicDto = {
    readonly "action": "boot" | "start" | "shutdown" | "delete" | "discontinue" | "hibernate" | "configure_spot" | "force_shutdown" | "delete_stuck" | "deploy" | "transfer";
    readonly "id": string | ReadonlyArray<string>;
    readonly "volume_ids"?: ReadonlyArray<string>;
    readonly "delete_permanently"?: boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PerformInstanceActionPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly id: Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>;
    readonly volume_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly delete_permanently: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceActionResultDto = {
    readonly "instanceId": string;
    readonly "action": "boot" | "start" | "shutdown" | "delete" | "discontinue" | "hibernate" | "configure_spot" | "force_shutdown" | "delete_stuck" | "deploy" | "transfer";
    readonly "status": "success" | "error";
    readonly "error"?: string;
    readonly "statusCode"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceActionResultDto: Schema.StructWithRest<Schema.Struct<{
    readonly instanceId: Schema.String;
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly status: Schema.Literals<readonly ["success", "error"]>;
    readonly error: Schema.optionalKey<Schema.String>;
    readonly statusCode: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PerformClusterActionPublicDto = {
    readonly "action": "discontinue";
    readonly "id": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PerformClusterActionPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literal<"discontinue">;
    readonly id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SharedVolumeDto = {
    readonly "name": string;
    readonly "size": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SharedVolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ExistingSharedVolumeDto = {
    readonly "id": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ExistingSharedVolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeployClusterResponsePublicApiDto = {
    readonly "id": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeployClusterResponsePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PerformClusterNodeActionPublicDto = {
    readonly "action": "boot" | "shutdown" | "force_shutdown";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PerformClusterNodeActionPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["boot", "shutdown", "force_shutdown"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceType = {
    readonly "best_for": ReadonlyArray<string>;
    readonly "cpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "deploy_warning"?: string;
    readonly "description": string;
    readonly "gpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu_memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "id": string;
    readonly "instance_type": string;
    readonly "memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "model": string;
    readonly "name": string;
    readonly "p2p": string;
    readonly "price_per_hour": string;
    readonly "spot_price": string;
    readonly "dynamic_price"?: string;
    readonly "max_dynamic_price": string;
    readonly "serverless_price"?: string;
    readonly "serverless_spot_price"?: string;
    readonly "storage": {
        readonly [x: string]: Schema.Json;
    };
    readonly "currency": "usd" | "eur";
    readonly "manufacturer": string;
    readonly "display_name": string;
    readonly "supported_os": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceType: Schema.StructWithRest<Schema.Struct<{
    readonly best_for: Schema.$Array<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly deploy_warning: Schema.optionalKey<Schema.String>;
    readonly description: Schema.String;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly id: Schema.String;
    readonly instance_type: Schema.String;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly p2p: Schema.String;
    readonly price_per_hour: Schema.String;
    readonly spot_price: Schema.String;
    readonly dynamic_price: Schema.optionalKey<Schema.String>;
    readonly max_dynamic_price: Schema.String;
    readonly serverless_price: Schema.optionalKey<Schema.String>;
    readonly serverless_spot_price: Schema.optionalKey<Schema.String>;
    readonly storage: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
    readonly display_name: Schema.String;
    readonly supported_os: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceAvailabilityResponseDto = {
    readonly "location_code": string;
    readonly "availabilities": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceAvailabilityResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly location_code: Schema.String;
    readonly availabilities: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClusterAvailabilityResponseDto = {
    readonly "location_code": string;
    readonly "availabilities": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ClusterAvailabilityResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly location_code: Schema.String;
    readonly availabilities: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetKeysResponseDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "key": string;
    readonly "fingerprint": string;
    readonly "created_by_user_id": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetKeysResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly key: Schema.String;
    readonly fingerprint: Schema.String;
    readonly created_by_user_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AddKeyDto = {
    readonly "name": string;
    readonly "key": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const AddKeyDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly key: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeleteKeysPublicDto = {
    readonly "keys": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeleteKeysPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly keys: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetScriptResponseDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "script": string;
    readonly "created_at": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetScriptResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly script: Schema.String;
    readonly created_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AddScriptDto = {
    readonly "name": string;
    readonly "script": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const AddScriptDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly script: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeleteScriptsDto = {
    readonly "scripts": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeleteScriptsDto: Schema.StructWithRest<Schema.Struct<{
    readonly scripts: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Location = {
    readonly "code": string;
    readonly "name": string;
    readonly "country_code": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const Location: Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly country_code: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type LongTermPeriodResponseDto = {
    readonly "code": string;
    readonly "name": string;
    readonly "is_enabled": boolean;
    readonly "unit_name": "hour" | "day" | "week" | "month" | "year";
    readonly "unit_value": number;
    readonly "discount_percentage": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const LongTermPeriodResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly is_enabled: Schema.Boolean;
    readonly unit_name: Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>;
    readonly unit_value: Schema.Number;
    readonly discount_percentage: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClusterType = {
    readonly "id": string;
    readonly "model": string;
    readonly "name": string;
    readonly "cluster_type": string;
    readonly "cpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu_memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "price_per_hour": string;
    readonly "currency": "usd" | "eur";
    readonly "manufacturer": string;
    readonly "node_details": ReadonlyArray<string>;
    readonly "supported_os": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ClusterType: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly cluster_type: Schema.String;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly price_per_hour: Schema.String;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
    readonly node_details: Schema.$Array<Schema.String>;
    readonly supported_os: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerType = {
    readonly "id": string;
    readonly "model": string;
    readonly "name": string;
    readonly "instance_type": string;
    readonly "cpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu_memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "serverless_price": string;
    readonly "serverless_spot_price": string;
    readonly "currency": "usd" | "eur";
    readonly "manufacturer": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerType: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly instance_type: Schema.String;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly serverless_price: Schema.String;
    readonly serverless_spot_price: Schema.String;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ManagedEndpointPrice = {
    readonly "resource": string;
    readonly "external_id": string;
    readonly "unit_price": number;
    readonly "unit_name": "generation" | "image" | "video" | "input_token" | "output_token" | "token" | "audio_second" | "video_second" | "inference_second" | "hour" | "second" | "minute" | "undefined" | "gpu_hour" | "gb_hour" | "gb_month" | "request";
    readonly "currency": "usd" | "eur";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ManagedEndpointPrice: Schema.StructWithRest<Schema.Struct<{
    readonly resource: Schema.String;
    readonly external_id: Schema.String;
    readonly unit_price: Schema.Number;
    readonly unit_name: Schema.Literals<readonly ["generation", "image", "video", "input_token", "output_token", "token", "audio_second", "video_second", "inference_second", "hour", "second", "minute", "undefined", "gpu_hour", "gb_hour", "gb_month", "request"]>;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistryPricingResponseDto = {
    readonly "price_per_month_per_gb": number;
    readonly "currency": "usd" | "eur";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistryPricingResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly price_per_month_per_gb: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupResponseDto = {
    readonly "id": string;
    readonly "project_id": string;
    readonly "name": string;
    readonly "description": string;
    readonly "location_code": string;
    readonly "instance_type": string;
    readonly "template": {
        readonly [x: string]: Schema.Json;
    };
    readonly "created_at": string;
    readonly "updated_at": string;
    readonly "deleted_at": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceGroupResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly project_id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly deleted_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupOsVolumeDto = {
    readonly "size": number;
    readonly "type"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceGroupOsVolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly size: Schema.Number;
    readonly type: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type MutableInstanceGroupTemplateDto = {
    readonly "ssh_key_ids"?: ReadonlyArray<string>;
    readonly "startup_script_id"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const MutableInstanceGroupTemplateDto: Schema.StructWithRest<Schema.Struct<{
    readonly ssh_key_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeploymentLogEntryPublicApiResponseDto = {
    readonly "timestamp": string;
    readonly "container_name": string;
    readonly "replica": string;
    readonly "message": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeploymentLogEntryPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly container_name: Schema.String;
    readonly replica: Schema.String;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ComputeResource = {
    readonly "name": string;
    readonly "size": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ComputeResource: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerRegistryCredentialsDto = {
    readonly "name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerRegistryCredentialsDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerHealthcheckSettings = {
    readonly "enabled": boolean;
    readonly "port": number;
    readonly "path": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerHealthcheckSettings: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly port: Schema.Number;
    readonly path: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerEntrypointOverridesSettings = {
    readonly "enabled": boolean;
    readonly "entrypoint"?: ReadonlyArray<string>;
    readonly "cmd"?: ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerEntrypointOverridesSettings: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly entrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly cmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerEnvVar = {
    readonly "name": string;
    readonly "value_or_reference_to_secret": string;
    readonly "type": "plain" | "secret";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerEnvVar: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly value_or_reference_to_secret: Schema.String;
    readonly type: Schema.Literals<readonly ["plain", "secret"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerVolumeMount = {
    readonly "type": "scratch" | "shared" | "secret" | "memory";
    readonly "mount_path": string;
    readonly "secret_name"?: string;
    readonly "size_in_mb"?: 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
    readonly "volumeId": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerVolumeMount: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
    readonly mount_path: Schema.String;
    readonly secret_name: Schema.optionalKey<Schema.String>;
    readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
    readonly volumeId: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobComputeResourceDto = {
    readonly "name": string;
    readonly "size": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobComputeResourceDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobScalingOptionsDto = {
    readonly "max_replica_count": number;
    readonly "queue_message_ttl_seconds": number;
    readonly "deadline_seconds": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobScalingOptionsDto: Schema.StructWithRest<Schema.Struct<{
    readonly max_replica_count: Schema.Number;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly deadline_seconds: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ImageInfoResponseDto = {
    readonly "image": string;
    readonly "last_updated_at"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ImageInfoResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly image: Schema.String;
    readonly last_updated_at: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type HealthcheckSettingsResponseDto = {
    readonly "enabled": boolean;
    readonly "port": number;
    readonly "path": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const HealthcheckSettingsResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly port: Schema.Number;
    readonly path: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EntrypointOverridesSettingsResponseDto = {
    readonly "enabled": boolean;
    readonly "entrypoint"?: ReadonlyArray<string>;
    readonly "cmd"?: ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EntrypointOverridesSettingsResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly entrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly cmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EnvVarResponseDto = {
    readonly "name": string;
    readonly "value_or_reference_to_secret": string;
    readonly "type": "plain" | "secret";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EnvVarResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly value_or_reference_to_secret: Schema.String;
    readonly type: Schema.Literals<readonly ["plain", "secret"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumeMountResponseDto = {
    readonly "type": "scratch" | "shared" | "secret" | "memory";
    readonly "mount_path": string;
    readonly "secret_name"?: string;
    readonly "size_in_mb"?: 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
    readonly "volume_id"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const VolumeMountResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
    readonly mount_path: Schema.String;
    readonly secret_name: Schema.optionalKey<Schema.String>;
    readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
    readonly volume_id: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistryCredentialsResponseDto = {
    readonly "name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistryCredentialsResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchScaledJobScalingOptionsDto = {
    readonly "max_replica_count"?: number;
    readonly "queue_message_ttl_seconds"?: number;
    readonly "deadline_seconds"?: number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchScaledJobScalingOptionsDto: Schema.StructWithRest<Schema.Struct<{
    readonly max_replica_count: Schema.optionalKey<Schema.Number>;
    readonly queue_message_ttl_seconds: Schema.optionalKey<Schema.Number>;
    readonly deadline_seconds: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScalingOptionsResponseDto = {
    readonly "max_replica_count": number;
    readonly "queue_message_ttl_seconds": number;
    readonly "deadline_seconds": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScalingOptionsResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly max_replica_count: Schema.Number;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly deadline_seconds: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetScaledJobStatusResponseDto = {
    readonly "status": "paused" | "terminating" | "running" | "ready";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetScaledJobStatusResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly status: Schema.Literals<readonly ["paused", "terminating", "running", "ready"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type HealthcheckSettings = {
    readonly "enabled": boolean;
    readonly "port": number;
    readonly "path": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const HealthcheckSettings: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly port: Schema.Number;
    readonly path: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EntrypointOverridesSettings = {
    readonly "enabled": boolean;
    readonly "entrypoint"?: ReadonlyArray<string>;
    readonly "cmd"?: ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EntrypointOverridesSettings: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly entrypoint: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly cmd: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type EnvVarPublicApi = {
    readonly "name": string;
    readonly "value_or_reference_to_secret": string;
    readonly "type": "plain" | "secret";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const EnvVarPublicApi: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly value_or_reference_to_secret: Schema.String;
    readonly type: Schema.Literals<readonly ["plain", "secret"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScratchVolumeMountDto = {
    readonly "type": "scratch";
    readonly "mount_path": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScratchVolumeMountDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literal<"scratch">;
    readonly mount_path: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SecretVolumeMountDto = {
    readonly "type": "secret";
    readonly "mount_path": string;
    readonly "secret_name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SecretVolumeMountDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literal<"secret">;
    readonly mount_path: Schema.String;
    readonly secret_name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SharedVolumeMountDto = {
    readonly "type": "shared";
    readonly "mount_path": string;
    readonly "volume_id": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SharedVolumeMountDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literal<"shared">;
    readonly mount_path: Schema.String;
    readonly volume_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type MemoryVolumeMountDto = {
    readonly "type": "memory";
    readonly "mount_path": string;
    readonly "size_in_mb": 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const MemoryVolumeMountDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literal<"memory">;
    readonly mount_path: Schema.String;
    readonly size_in_mb: Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistryCredentials = {
    readonly "name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistryCredentials: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScalingPolicy = {
    readonly "delay_seconds": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScalingPolicy: Schema.StructWithRest<Schema.Struct<{
    readonly delay_seconds: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type QueueLoadScalingTrigger = {
    readonly "threshold": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const QueueLoadScalingTrigger: Schema.StructWithRest<Schema.Struct<{
    readonly threshold: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UtilizationScalingTrigger = {
    readonly "enabled": boolean;
    readonly "threshold": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const UtilizationScalingTrigger: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly threshold: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AutoupdateSettings = {
    readonly "enabled": boolean;
    readonly "mode": "latest" | "semantic";
    readonly "tag_filter"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const AutoupdateSettings: Schema.StructWithRest<Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly mode: Schema.Literals<readonly ["latest", "semantic"]>;
    readonly tag_filter: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetDeploymentStatusResponseDto = {
    readonly "status": "initializing" | "healthy" | "degraded" | "unhealthy" | "paused" | "quota_reached" | "image_pulling" | "updating" | "terminating";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetDeploymentStatusResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly status: Schema.Literals<readonly ["initializing", "healthy", "degraded", "unhealthy", "paused", "quota_reached", "image_pulling", "updating", "terminating"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ReplicaInfo = {
    readonly "id": string;
    readonly "status": "unavailable" | "initializing" | "running" | "terminating" | "error" | "imagepulling";
    readonly "started_at": string;
    readonly "image"?: string;
    readonly "image_name"?: string;
    readonly "image_tag"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ReplicaInfo: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly status: Schema.Literals<readonly ["unavailable", "initializing", "running", "terminating", "error", "imagepulling"]>;
    readonly started_at: Schema.String;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly image_name: Schema.optionalKey<Schema.String>;
    readonly image_tag: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeleteEnvironmentVariablesPublicApiDto = {
    readonly "container_name": string;
    readonly "env": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeleteEnvironmentVariablesPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetComputeResourcesPublicApiResponseDto = {
    readonly "name": string;
    readonly "size": number;
    readonly "is_available": boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetComputeResourcesPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
    readonly is_available: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetSecretsPublicApiResponseDto = {
    readonly "name": string;
    readonly "created_at": string;
    readonly "secret_type": "generic" | "file-secret";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetSecretsPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly secret_type: Schema.Literals<readonly ["generic", "file-secret"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateSecretPublicApiDto = {
    readonly "name": string;
    readonly "value": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateSecretPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetFilesetSecretsPublicApiResponseDto = {
    readonly "name": string;
    readonly "created_at": string;
    readonly "secret_type": "file-secret";
    readonly "file_names": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetFilesetSecretsPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly secret_type: Schema.Literal<"file-secret">;
    readonly file_names: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SecretFilePublicApiDto = {
    readonly "file_name": string;
    readonly "base64_content": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SecretFilePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly file_name: Schema.String;
    readonly base64_content: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetRegistryCredentialsPublicApiResponseDto = {
    readonly "name": string;
    readonly "created_at": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetRegistryCredentialsPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateRegistryCredentialsPublicApiDto = {
    readonly "name": string;
    readonly "type": "verda" | "gcr" | "dockerhub" | "ghcr" | "aws-ecr" | "scaleway" | "custom";
    readonly "username"?: string;
    readonly "access_token"?: string;
    readonly "service_account_key"?: string;
    readonly "docker_config_json"?: string;
    readonly "access_key_id"?: string;
    readonly "secret_access_key"?: string;
    readonly "region"?: string;
    readonly "ecr_repo"?: string;
    readonly "scaleway_domain"?: string;
    readonly "scaleway_uuid"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateRegistryCredentialsPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly type: Schema.Literals<readonly ["verda", "gcr", "dockerhub", "ghcr", "aws-ecr", "scaleway", "custom"]>;
    readonly username: Schema.optionalKey<Schema.String>;
    readonly access_token: Schema.optionalKey<Schema.String>;
    readonly service_account_key: Schema.optionalKey<Schema.String>;
    readonly docker_config_json: Schema.optionalKey<Schema.String>;
    readonly access_key_id: Schema.optionalKey<Schema.String>;
    readonly secret_access_key: Schema.optionalKey<Schema.String>;
    readonly region: Schema.optionalKey<Schema.String>;
    readonly ecr_repo: Schema.optionalKey<Schema.String>;
    readonly scaleway_domain: Schema.optionalKey<Schema.String>;
    readonly scaleway_uuid: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplateFeaturePublicApiDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "description"?: string;
    readonly "is_default": boolean;
    readonly "conflicts_with": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerDeploymentTemplateFeaturePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly is_default: Schema.Boolean;
    readonly conflicts_with: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SystemLogEntryPublicApiResponseDto = {
    readonly "timestamp": string;
    readonly "reason": string;
    readonly "message": string;
    readonly "involved_object": string;
    readonly "count": number;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const SystemLogEntryPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly reason: Schema.String;
    readonly message: Schema.String;
    readonly involved_object: Schema.String;
    readonly count: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetAuditLogResponseListDto = {
    readonly "data": ReadonlyArray<AuditLogResponseDto>;
    readonly "cursor"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetAuditLogResponseListDto: Schema.StructWithRest<Schema.Struct<{
    readonly data: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly specversion: Schema.String;
        readonly id: Schema.String;
        readonly source: Schema.String;
        readonly type: Schema.String;
        readonly subject: Schema.String;
        readonly time: Schema.String;
        readonly data: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly cursor: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetActivityJournalResponseDto = {
    readonly "id": string;
    readonly "object_id": string;
    readonly "object_type": "compute" | "volume";
    readonly "action_code": "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
    readonly "actor_id"?: string;
    readonly "actor_email"?: string;
    readonly "project_id": string;
    readonly "timestamp": string;
    readonly "location_code": string;
    readonly "request_origin"?: string;
    readonly "request_ip"?: string;
    readonly "error_message"?: string;
    readonly "parent_id"?: string;
    readonly "service"?: string;
    readonly "target_location_code"?: string;
    readonly "volume"?: ActivityVolumeDto;
    readonly "compute"?: ActivityComputeDto;
    readonly "target_volume_id"?: string;
    readonly "target_volume"?: {
        readonly "id": string;
        readonly "name": string;
        readonly "created_at": string;
        readonly "gb": number;
        readonly "is_shared_fs": boolean;
        readonly "template_type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
        readonly "location_code": string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "target_compute_id"?: string;
    readonly "target_compute"?: {
        readonly "id": string;
        readonly "hostname": string;
        readonly "compute_type": string;
        readonly "is_cluster": boolean;
        readonly "ip"?: string;
        readonly "os_volume_id"?: string;
        readonly "location_code"?: string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "source_volume_id"?: string;
    readonly "source_volume"?: {
        readonly "id": string;
        readonly "name": string;
        readonly "created_at": string;
        readonly "gb": number;
        readonly "is_shared_fs": boolean;
        readonly "template_type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
        readonly "location_code": string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "source_compute_id"?: string;
    readonly "source_compute"?: {
        readonly "id": string;
        readonly "hostname": string;
        readonly "compute_type": string;
        readonly "is_cluster": boolean;
        readonly "ip"?: string;
        readonly "os_volume_id"?: string;
        readonly "location_code"?: string;
    } & {
        readonly [x: string]: Schema.Json;
    };
    readonly "properties"?: {
        readonly [x: string]: Schema.Json;
    };
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetActivityJournalResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly object_id: Schema.String;
    readonly object_type: Schema.Literals<readonly ["compute", "volume"]>;
    readonly action_code: Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>;
    readonly actor_id: Schema.optionalKey<Schema.String>;
    readonly actor_email: Schema.optionalKey<Schema.String>;
    readonly project_id: Schema.String;
    readonly timestamp: Schema.String;
    readonly location_code: Schema.String;
    readonly request_origin: Schema.optionalKey<Schema.String>;
    readonly request_ip: Schema.optionalKey<Schema.String>;
    readonly error_message: Schema.optionalKey<Schema.String>;
    readonly parent_id: Schema.optionalKey<Schema.String>;
    readonly service: Schema.optionalKey<Schema.String>;
    readonly target_location_code: Schema.optionalKey<Schema.String>;
    readonly volume: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityVolumeDto, ActivityVolumeDto, never, never>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityComputeDto, ActivityComputeDto, never, never>>>;
    readonly target_volume_id: Schema.optionalKey<Schema.String>;
    readonly target_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly target_compute_id: Schema.optionalKey<Schema.String>;
    readonly target_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_volume_id: Schema.optionalKey<Schema.String>;
    readonly source_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_compute_id: Schema.optionalKey<Schema.String>;
    readonly source_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly properties: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetVolumePublicResponseDto = {
    readonly "id": string;
    readonly "instance_id": string;
    readonly "instances": ReadonlyArray<string>;
    readonly "name": string;
    readonly "created_at": string;
    readonly "created_by_user_id"?: string;
    readonly "status": "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
    readonly "size": number;
    readonly "is_os_volume": boolean;
    readonly "target": string;
    readonly "type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
    readonly "location": string;
    readonly "ssh_key_ids": ReadonlyArray<string>;
    readonly "pseudo_path": string;
    readonly "create_directory_command": string;
    readonly "mount_command": string;
    readonly "filesystem_to_fstab_command": string;
    readonly "contract": string;
    readonly "base_hourly_cost": number;
    readonly "monthly_price": number;
    readonly "currency": "usd" | "eur";
    readonly "long_term": {
        readonly [x: string]: Schema.Json;
    };
    readonly "tags": ReadonlyArray<TagResponseDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetVolumePublicResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly pseudo_path: Schema.String;
    readonly create_directory_command: Schema.String;
    readonly mount_command: Schema.String;
    readonly filesystem_to_fstab_command: Schema.String;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly long_term: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetVolumeInTrashPublicResponseDto = {
    readonly "id": string;
    readonly "instance_id": string;
    readonly "instances": ReadonlyArray<string>;
    readonly "name": string;
    readonly "created_at": string;
    readonly "status": "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
    readonly "size": number;
    readonly "is_os_volume": boolean;
    readonly "target": string;
    readonly "type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
    readonly "location": string;
    readonly "ssh_key_ids": ReadonlyArray<string>;
    readonly "contract": string;
    readonly "base_hourly_cost": number;
    readonly "monthly_price": number;
    readonly "currency": "usd" | "eur";
    readonly "tags": ReadonlyArray<TagResponseDto>;
    readonly "deleted_at": string;
    readonly "is_permanently_deleted": boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetVolumeInTrashPublicResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly deleted_at: Schema.String;
    readonly is_permanently_deleted: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetInstanceResponsePublicApiDto = {
    readonly "id": string;
    readonly "ip": string;
    readonly "status": "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
    readonly "created_at": string;
    readonly "created_by_user_id"?: string;
    readonly "cpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu_memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "storage": {
        readonly [x: string]: Schema.Json;
    };
    readonly "hostname": string;
    readonly "description": string;
    readonly "tags": ReadonlyArray<TagResponseDto>;
    readonly "location": string;
    readonly "price_per_hour": number;
    readonly "is_spot": boolean;
    readonly "instance_type": string;
    readonly "image": string;
    readonly "os_name": string;
    readonly "startup_script_id": string;
    readonly "ssh_key_ids": ReadonlyArray<string>;
    readonly "os_volume_id": string;
    readonly "jupyter_token": string;
    readonly "contract": "LONG_TERM" | "PAY_AS_YOU_GO" | "SPOT";
    readonly "pricing": "DYNAMIC_PRICE" | "FIXED_PRICE";
    readonly "volume_ids": ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetInstanceResponsePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly storage: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly is_spot: Schema.Boolean;
    readonly instance_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly os_volume_id: Schema.String;
    readonly jupyter_token: Schema.String;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO", "SPOT"]>;
    readonly pricing: Schema.Literals<readonly ["DYNAMIC_PRICE", "FIXED_PRICE"]>;
    readonly volume_ids: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetClusterResponsePublicApiDto = {
    readonly "id": string;
    readonly "ip": string;
    readonly "status": "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
    readonly "created_at": string;
    readonly "created_by_user_id"?: string;
    readonly "cpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu": {
        readonly [x: string]: Schema.Json;
    };
    readonly "gpu_memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "memory": {
        readonly [x: string]: Schema.Json;
    };
    readonly "hostname": string;
    readonly "description": string;
    readonly "tags": ReadonlyArray<TagResponseDto>;
    readonly "location": string;
    readonly "price_per_hour": number;
    readonly "cluster_type": string;
    readonly "image": string;
    readonly "os_name": string;
    readonly "startup_script_id"?: string;
    readonly "ssh_key_ids": ReadonlyArray<string>;
    readonly "contract": "LONG_TERM" | "PAY_AS_YOU_GO";
    readonly "auto_rental_extension"?: boolean;
    readonly "turn_to_pay_as_you_go"?: boolean;
    readonly "extension_settings"?: "auto_renew" | "pay_as_you_go" | "end_contract";
    readonly "long_term_period"?: string;
    readonly "worker_nodes"?: ReadonlyArray<string>;
    readonly "shared_volumes"?: ReadonlyArray<string>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetClusterResponsePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly cluster_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO"]>;
    readonly auto_rental_extension: Schema.optionalKey<Schema.Boolean>;
    readonly turn_to_pay_as_you_go: Schema.optionalKey<Schema.Boolean>;
    readonly extension_settings: Schema.optionalKey<Schema.Literals<readonly ["auto_renew", "pay_as_you_go", "end_contract"]>>;
    readonly long_term_period: Schema.optionalKey<Schema.String>;
    readonly worker_nodes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly shared_volumes: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateVolumePublicDto = {
    readonly "type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
    readonly "location_code": string;
    readonly "size": number;
    readonly "instance_id"?: string;
    readonly "instance_ids"?: ReadonlyArray<string>;
    readonly "name": string;
    readonly "tags"?: ReadonlyArray<TagDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateVolumePublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location_code: Schema.String;
    readonly size: Schema.Number;
    readonly instance_id: Schema.optionalKey<Schema.String>;
    readonly instance_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly name: Schema.String;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type OsVolumeDto = {
    readonly "name": string;
    readonly "size": number;
    readonly "on_spot_discontinue"?: "keep_detached" | "move_to_trash" | "delete_permanently";
    readonly "tags"?: ReadonlyArray<TagDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const OsVolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
    readonly on_spot_discontinue: Schema.optionalKey<Schema.Literals<readonly ["keep_detached", "move_to_trash", "delete_permanently"]>>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumeDto = {
    readonly "name": string;
    readonly "size": number;
    readonly "on_spot_discontinue"?: "keep_detached" | "move_to_trash" | "delete_permanently";
    readonly "tags"?: ReadonlyArray<TagDto>;
    readonly "type": "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const VolumeDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
    readonly on_spot_discontinue: Schema.optionalKey<Schema.Literals<readonly ["keep_detached", "move_to_trash", "delete_permanently"]>>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PerformClusterActionsBulkDto = {
    readonly "actions": ReadonlyArray<PerformClusterActionPublicDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PerformClusterActionsBulkDto: Schema.StructWithRest<Schema.Struct<{
    readonly actions: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly action: Schema.Literal<"discontinue">;
        readonly id: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeployClusterPublicDto = {
    readonly "cluster_type": string;
    readonly "image": string;
    readonly "ssh_key_ids"?: string | ReadonlyArray<string>;
    readonly "startup_script_id"?: string;
    readonly "hostname": string;
    readonly "description"?: string;
    readonly "tags"?: ReadonlyArray<TagDto>;
    readonly "location_code": string;
    readonly "contract"?: "PAY_AS_YOU_GO" | "LONG_TERM";
    readonly "extension_settings"?: "auto_renew" | "pay_as_you_go" | "end_contract";
    readonly "auto_rental_extension"?: boolean;
    readonly "turn_to_pay_as_you_go"?: boolean;
    readonly "shared_volume": SharedVolumeDto;
    readonly "existing_volumes"?: ReadonlyArray<ExistingSharedVolumeDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeployClusterPublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly cluster_type: Schema.String;
    readonly image: Schema.String;
    readonly ssh_key_ids: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly hostname: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly location_code: Schema.String;
    readonly contract: Schema.optionalKey<Schema.Literals<readonly ["PAY_AS_YOU_GO", "LONG_TERM"]>>;
    readonly extension_settings: Schema.optionalKey<Schema.Literals<readonly ["auto_renew", "pay_as_you_go", "end_contract"]>>;
    readonly auto_rental_extension: Schema.optionalKey<Schema.Boolean>;
    readonly turn_to_pay_as_you_go: Schema.optionalKey<Schema.Boolean>;
    readonly shared_volume: Schema.suspend<Schema.Codec<SharedVolumeDto, SharedVolumeDto, never, never>>;
    readonly existing_volumes: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupTemplateDto = {
    readonly "image": string;
    readonly "os_volume"?: InstanceGroupOsVolumeDto;
    readonly "ssh_key_ids"?: ReadonlyArray<string>;
    readonly "startup_script_id"?: string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const InstanceGroupTemplateDto: Schema.StructWithRest<Schema.Struct<{
    readonly image: Schema.String;
    readonly os_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly size: Schema.Number;
        readonly type: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly ssh_key_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type UpdateInstanceGroupDto = {
    readonly "name"?: string;
    readonly "description"?: string;
    readonly "template"?: MutableInstanceGroupTemplateDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const UpdateInstanceGroupDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.optionalKey<Schema.String>;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly template: Schema.optionalKey<Schema.suspend<Schema.Codec<MutableInstanceGroupTemplateDto, MutableInstanceGroupTemplateDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobShortInfoResponseDto = {
    readonly "name": string;
    readonly "created_at": string;
    readonly "created_by_user_id": string;
    readonly "compute": ComputeResource;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScaledJobShortInfoResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplatePublicApiDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "description": string;
    readonly "provider": string;
    readonly "engine": string;
    readonly "model_repository": string;
    readonly "parameters": string;
    readonly "context_length": number;
    readonly "input_modalities": ReadonlyArray<string>;
    readonly "output_modalities": ReadonlyArray<string>;
    readonly "tasks": ReadonlyArray<string>;
    readonly "requires_hugging_face_token": boolean;
    readonly "min_vram_gb": number;
    readonly "recommended_compute": ComputeResource;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerDeploymentTemplatePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly provider: Schema.String;
    readonly engine: Schema.String;
    readonly model_repository: Schema.String;
    readonly parameters: Schema.String;
    readonly context_length: Schema.Number;
    readonly input_modalities: Schema.$Array<Schema.String>;
    readonly output_modalities: Schema.$Array<Schema.String>;
    readonly tasks: Schema.$Array<Schema.String>;
    readonly requires_hugging_face_token: Schema.Boolean;
    readonly min_vram_gb: Schema.Number;
    readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplateVariantPublicApiDto = {
    readonly "id": string;
    readonly "precision": string;
    readonly "model_repository": string;
    readonly "min_vram_gb": number;
    readonly "is_default": boolean;
    readonly "description"?: string;
    readonly "recommended_compute": ComputeResource;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerDeploymentTemplateVariantPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly precision: Schema.String;
    readonly model_repository: Schema.String;
    readonly min_vram_gb: Schema.Number;
    readonly is_default: Schema.Boolean;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerRegistrySettings = {
    readonly "credentials"?: CreateScaledJobContainerRegistryCredentialsDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerRegistrySettings: Schema.StructWithRest<Schema.Struct<{
    readonly credentials: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerRegistryCredentialsDto, CreateScaledJobContainerRegistryCredentialsDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobContainerDto = {
    readonly "image": string;
    readonly "should_use_cached_image"?: boolean;
    readonly "exposed_port": number;
    readonly "healthcheck"?: CreateScaledJobContainerHealthcheckSettings;
    readonly "entrypoint_overrides"?: CreateScaledJobContainerEntrypointOverridesSettings;
    readonly "env"?: ReadonlyArray<CreateScaledJobContainerEnvVar>;
    readonly "volume_mounts"?: ReadonlyArray<CreateScaledJobContainerVolumeMount>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobContainerDto: Schema.StructWithRest<Schema.Struct<{
    readonly image: Schema.String;
    readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
    readonly exposed_port: Schema.Number;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
        readonly mount_path: Schema.String;
        readonly secret_name: Schema.optionalKey<Schema.String>;
        readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
        readonly volumeId: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchScaledJobContainerDto = {
    readonly "image"?: string;
    readonly "should_use_cached_image"?: boolean;
    readonly "exposed_port"?: number;
    readonly "healthcheck"?: CreateScaledJobContainerHealthcheckSettings;
    readonly "entrypoint_overrides"?: CreateScaledJobContainerEntrypointOverridesSettings;
    readonly "env"?: ReadonlyArray<CreateScaledJobContainerEnvVar>;
    readonly "volume_mounts"?: ReadonlyArray<CreateScaledJobContainerVolumeMount>;
    readonly "name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchScaledJobContainerDto: Schema.StructWithRest<Schema.Struct<{
    readonly image: Schema.optionalKey<Schema.String>;
    readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
    readonly exposed_port: Schema.optionalKey<Schema.Number>;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
        readonly mount_path: Schema.String;
        readonly secret_name: Schema.optionalKey<Schema.String>;
        readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
        readonly volumeId: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerResponseDto = {
    readonly "name": string;
    readonly "image": ImageInfoResponseDto;
    readonly "exposed_port": number;
    readonly "healthcheck"?: HealthcheckSettingsResponseDto;
    readonly "entrypoint_overrides"?: EntrypointOverridesSettingsResponseDto;
    readonly "env": ReadonlyArray<EnvVarResponseDto>;
    readonly "volume_mounts": ReadonlyArray<VolumeMountResponseDto>;
    readonly "should_use_cached_image": boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly image: Schema.suspend<Schema.Codec<ImageInfoResponseDto, ImageInfoResponseDto, never, never>>;
    readonly exposed_port: Schema.Number;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettingsResponseDto, HealthcheckSettingsResponseDto, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettingsResponseDto, EntrypointOverridesSettingsResponseDto, never, never>>>;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly volume_mounts: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
        readonly mount_path: Schema.String;
        readonly secret_name: Schema.optionalKey<Schema.String>;
        readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
        readonly volume_id: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly should_use_cached_image: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistrySettingsResponseDto = {
    readonly "is_private": boolean;
    readonly "credentials": ContainerRegistryCredentialsResponseDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistrySettingsResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly is_private: Schema.Boolean;
    readonly credentials: Schema.suspend<Schema.Codec<ContainerRegistryCredentialsResponseDto, ContainerRegistryCredentialsResponseDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type GetDeploymentEnvVariablesPublicApiResponseDto = {
    readonly "container_name": string;
    readonly "env": ReadonlyArray<EnvVarPublicApi>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const GetDeploymentEnvVariablesPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateOrPatchEnvironmentVariablesDto = {
    readonly "container_name": string;
    readonly "env": ReadonlyArray<EnvVarPublicApi>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateOrPatchEnvironmentVariablesDto: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerPublicApiResponseDto = {
    readonly "should_use_cached_image"?: boolean;
    readonly "exposed_port": number;
    readonly "healthcheck"?: HealthcheckSettings;
    readonly "entrypoint_overrides"?: EntrypointOverridesSettings;
    readonly "env"?: ReadonlyArray<EnvVarPublicApi>;
    readonly "volume_mounts"?: ReadonlyArray<ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto>;
    readonly "image": {
        readonly [x: string]: Schema.Json;
    };
    readonly "name": string;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
    readonly exposed_port: Schema.Number;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
    readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly name: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerPublicApiDto = {
    readonly "image": string;
    readonly "should_use_cached_image"?: boolean;
    readonly "exposed_port": number;
    readonly "healthcheck"?: HealthcheckSettings;
    readonly "entrypoint_overrides"?: EntrypointOverridesSettings;
    readonly "env"?: ReadonlyArray<EnvVarPublicApi>;
    readonly "volume_mounts"?: ReadonlyArray<ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly image: Schema.String;
    readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
    readonly exposed_port: Schema.Number;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerRegistrySettingsPublicApiDto = {
    readonly "is_private": boolean;
    readonly "credentials": ContainerRegistryCredentials;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerRegistrySettingsPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly is_private: Schema.Boolean;
    readonly credentials: Schema.suspend<Schema.Codec<ContainerRegistryCredentials, ContainerRegistryCredentials, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScalingTriggers = {
    readonly "queue_load": QueueLoadScalingTrigger;
    readonly "cpu_utilization"?: UtilizationScalingTrigger;
    readonly "gpu_utilization"?: UtilizationScalingTrigger;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScalingTriggers: Schema.StructWithRest<Schema.Struct<{
    readonly queue_load: Schema.suspend<Schema.Codec<QueueLoadScalingTrigger, QueueLoadScalingTrigger, never, never>>;
    readonly cpu_utilization: Schema.optionalKey<Schema.suspend<Schema.Codec<UtilizationScalingTrigger, UtilizationScalingTrigger, never, never>>>;
    readonly gpu_utilization: Schema.optionalKey<Schema.suspend<Schema.Codec<UtilizationScalingTrigger, UtilizationScalingTrigger, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchScalingTriggers = {
    readonly "queue_load"?: QueueLoadScalingTrigger;
    readonly "cpu_utilization"?: UtilizationScalingTrigger;
    readonly "gpu_utilization"?: UtilizationScalingTrigger;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchScalingTriggers: Schema.StructWithRest<Schema.Struct<{
    readonly queue_load: Schema.optionalKey<Schema.suspend<Schema.Codec<QueueLoadScalingTrigger, QueueLoadScalingTrigger, never, never>>>;
    readonly cpu_utilization: Schema.optionalKey<Schema.suspend<Schema.Codec<UtilizationScalingTrigger, UtilizationScalingTrigger, never, never>>>;
    readonly gpu_utilization: Schema.optionalKey<Schema.suspend<Schema.Codec<UtilizationScalingTrigger, UtilizationScalingTrigger, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchContainerPublicApiDto = {
    readonly "name": string;
    readonly "image"?: string;
    readonly "should_use_cached_image"?: boolean;
    readonly "exposed_port"?: number;
    readonly "healthcheck"?: HealthcheckSettings;
    readonly "entrypoint_overrides"?: EntrypointOverridesSettings;
    readonly "env"?: ReadonlyArray<EnvVarPublicApi>;
    readonly "autoupdate"?: AutoupdateSettings;
    readonly "volume_mounts"?: ReadonlyArray<ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchContainerPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly image: Schema.optionalKey<Schema.String>;
    readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
    readonly exposed_port: Schema.optionalKey<Schema.Number>;
    readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
    readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly autoupdate: Schema.optionalKey<Schema.suspend<Schema.Codec<AutoupdateSettings, AutoupdateSettings, never, never>>>;
    readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ReplicasPublicApiDto = {
    readonly "list": ReadonlyArray<ReplicaInfo>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ReplicasPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly list: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly status: Schema.Literals<readonly ["unavailable", "initializing", "running", "terminating", "error", "imagepulling"]>;
        readonly started_at: Schema.String;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly image_name: Schema.optionalKey<Schema.String>;
        readonly image_tag: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateFilesetSecretPublicApiDto = {
    readonly "name": string;
    readonly "files": ReadonlyArray<SecretFilePublicApiDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateFilesetSecretPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly files: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly file_name: Schema.String;
        readonly base64_content: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeployInstancePublicDto = {
    readonly "instance_type": string;
    readonly "image": string;
    readonly "ssh_key_ids"?: string | ReadonlyArray<string>;
    readonly "startup_script_id"?: string;
    readonly "hostname": string;
    readonly "description"?: string;
    readonly "tags"?: ReadonlyArray<TagDto>;
    readonly "location_code": string;
    readonly "os_volume"?: OsVolumeDto;
    readonly "is_spot"?: boolean;
    readonly "coupon"?: string;
    readonly "volumes"?: ReadonlyArray<VolumeDto>;
    readonly "existing_volumes"?: ReadonlyArray<string>;
    readonly "contract"?: "LONG_TERM" | "PAY_AS_YOU_GO" | "SPOT";
    readonly "pricing"?: "DYNAMIC_PRICE" | "FIXED_PRICE";
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeployInstancePublicDto: Schema.StructWithRest<Schema.Struct<{
    readonly instance_type: Schema.String;
    readonly image: Schema.String;
    readonly ssh_key_ids: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly hostname: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly location_code: Schema.String;
    readonly os_volume: Schema.optionalKey<Schema.suspend<Schema.Codec<OsVolumeDto, OsVolumeDto, never, never>>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
    readonly coupon: Schema.optionalKey<Schema.String>;
    readonly volumes: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly size: Schema.Number;
        readonly on_spot_discontinue: Schema.optionalKey<Schema.Literals<readonly ["keep_detached", "move_to_trash", "delete_permanently"]>>;
        readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly key: Schema.String;
            readonly value: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly existing_volumes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly contract: Schema.optionalKey<Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO", "SPOT"]>>;
    readonly pricing: Schema.optionalKey<Schema.Literals<readonly ["DYNAMIC_PRICE", "FIXED_PRICE"]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateInstanceGroupDto = {
    readonly "name": string;
    readonly "description"?: string;
    readonly "location_code": string;
    readonly "instance_type": string;
    readonly "template": InstanceGroupTemplateDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateInstanceGroupDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly os_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly size: Schema.Number;
            readonly type: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly ssh_key_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly startup_script_id: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplateDetailPublicApiDto = {
    readonly "id": string;
    readonly "name": string;
    readonly "description": string;
    readonly "provider": string;
    readonly "engine": string;
    readonly "model_repository": string;
    readonly "parameters": string;
    readonly "context_length": number;
    readonly "input_modalities": ReadonlyArray<string>;
    readonly "output_modalities": ReadonlyArray<string>;
    readonly "tasks": ReadonlyArray<string>;
    readonly "requires_hugging_face_token": boolean;
    readonly "min_vram_gb": number;
    readonly "recommended_compute": ComputeResource;
    readonly "revision": {
        readonly [x: string]: Schema.Json;
    };
    readonly "variants": ReadonlyArray<ContainerDeploymentTemplateVariantPublicApiDto>;
    readonly "features": ReadonlyArray<ContainerDeploymentTemplateFeaturePublicApiDto>;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ContainerDeploymentTemplateDetailPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly provider: Schema.String;
    readonly engine: Schema.String;
    readonly model_repository: Schema.String;
    readonly parameters: Schema.String;
    readonly context_length: Schema.Number;
    readonly input_modalities: Schema.$Array<Schema.String>;
    readonly output_modalities: Schema.$Array<Schema.String>;
    readonly tasks: Schema.$Array<Schema.String>;
    readonly requires_hugging_face_token: Schema.Boolean;
    readonly min_vram_gb: Schema.Number;
    readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly revision: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly variants: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly precision: Schema.String;
        readonly model_repository: Schema.String;
        readonly min_vram_gb: Schema.Number;
        readonly is_default: Schema.Boolean;
        readonly description: Schema.optionalKey<Schema.String>;
        readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly features: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.String>;
        readonly is_default: Schema.Boolean;
        readonly conflicts_with: Schema.$Array<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScaledJobDto = {
    readonly "name": string;
    readonly "container_registry_settings"?: CreateScaledJobContainerRegistrySettings;
    readonly "containers": ReadonlyArray<CreateScaledJobContainerDto>;
    readonly "compute": CreateScaledJobComputeResourceDto;
    readonly "scaling": CreateScaledJobScalingOptionsDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScaledJobDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerRegistrySettings, CreateScaledJobContainerRegistrySettings, never, never>>>;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volumeId: Schema.String;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly compute: Schema.suspend<Schema.Codec<CreateScaledJobComputeResourceDto, CreateScaledJobComputeResourceDto, never, never>>;
    readonly scaling: Schema.suspend<Schema.Codec<CreateScaledJobScalingOptionsDto, CreateScaledJobScalingOptionsDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchScaledJobDto = {
    readonly "container_registry_settings"?: CreateScaledJobContainerRegistrySettings;
    readonly "containers"?: ReadonlyArray<PatchScaledJobContainerDto>;
    readonly "compute"?: CreateScaledJobComputeResourceDto;
    readonly "scaling"?: PatchScaledJobScalingOptionsDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchScaledJobDto: Schema.StructWithRest<Schema.Struct<{
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerRegistrySettings, CreateScaledJobContainerRegistrySettings, never, never>>>;
    readonly containers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.optionalKey<Schema.String>;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.optionalKey<Schema.Number>;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volumeId: Schema.String;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobComputeResourceDto, CreateScaledJobComputeResourceDto, never, never>>>;
    readonly scaling: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScaledJobScalingOptionsDto, PatchScaledJobScalingOptionsDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobResponseDto = {
    readonly "name": string;
    readonly "containers": ReadonlyArray<ContainerResponseDto>;
    readonly "endpoint_base_url": string;
    readonly "created_at": string;
    readonly "created_by_user_id": string;
    readonly "compute": ComputeResource;
    readonly "container_registry_settings": ContainerRegistrySettingsResponseDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScaledJobResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.suspend<Schema.Codec<ImageInfoResponseDto, ImageInfoResponseDto, never, never>>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettingsResponseDto, HealthcheckSettingsResponseDto, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettingsResponseDto, EntrypointOverridesSettingsResponseDto, never, never>>>;
        readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly volume_mounts: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volume_id: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly should_use_cached_image: Schema.Boolean;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsResponseDto, ContainerRegistrySettingsResponseDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeploymentPublicApiResponseDto = {
    readonly "name": string;
    readonly "containers": ReadonlyArray<ContainerPublicApiResponseDto>;
    readonly "endpoint_base_url": string;
    readonly "created_at": string;
    readonly "compute": ComputeResource;
    readonly "container_registry_settings": ContainerRegistrySettingsPublicApiDto;
    readonly "is_spot": boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeploymentPublicApiResponseDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateScalingOptionsPublicApiDto = {
    readonly "min_replica_count": number;
    readonly "max_replica_count": number;
    readonly "scale_down_policy": ScalingPolicy;
    readonly "scale_up_policy": ScalingPolicy;
    readonly "queue_message_ttl_seconds": number;
    readonly "concurrent_requests_per_replica": number;
    readonly "scaling_triggers": ScalingTriggers;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateScalingOptionsPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.Number;
    readonly max_replica_count: Schema.Number;
    readonly scale_down_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly scale_up_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly concurrent_requests_per_replica: Schema.Number;
    readonly scaling_triggers: Schema.suspend<Schema.Codec<ScalingTriggers, ScalingTriggers, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScalingOptionsPublicApiDto = {
    readonly "min_replica_count": number;
    readonly "max_replica_count": number;
    readonly "scale_down_policy": ScalingPolicy;
    readonly "scale_up_policy": ScalingPolicy;
    readonly "queue_message_ttl_seconds": number;
    readonly "concurrent_requests_per_replica": number;
    readonly "scaling_triggers": ScalingTriggers;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const ScalingOptionsPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.Number;
    readonly max_replica_count: Schema.Number;
    readonly scale_down_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly scale_up_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly concurrent_requests_per_replica: Schema.Number;
    readonly scaling_triggers: Schema.suspend<Schema.Codec<ScalingTriggers, ScalingTriggers, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchScalingOptionsPublicApiDto = {
    readonly "min_replica_count"?: number;
    readonly "max_replica_count"?: number;
    readonly "scale_down_policy"?: ScalingPolicy;
    readonly "scale_up_policy"?: ScalingPolicy;
    readonly "queue_message_ttl_seconds"?: number;
    readonly "concurrent_requests_per_replica"?: number;
    readonly "scaling_triggers"?: PatchScalingTriggers;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchScalingOptionsPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.optionalKey<Schema.Number>;
    readonly max_replica_count: Schema.optionalKey<Schema.Number>;
    readonly scale_down_policy: Schema.optionalKey<Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>>;
    readonly scale_up_policy: Schema.optionalKey<Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>>;
    readonly queue_message_ttl_seconds: Schema.optionalKey<Schema.Number>;
    readonly concurrent_requests_per_replica: Schema.optionalKey<Schema.Number>;
    readonly scaling_triggers: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScalingTriggers, PatchScalingTriggers, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PatchDeploymentPublicApiDto = {
    readonly "container_registry_settings"?: ContainerRegistrySettingsPublicApiDto;
    readonly "containers"?: ReadonlyArray<PatchContainerPublicApiDto>;
    readonly "compute"?: ComputeResource;
    readonly "is_spot"?: boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const PatchDeploymentPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>>;
    readonly containers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.optionalKey<Schema.Number>;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly autoupdate: Schema.optionalKey<Schema.suspend<Schema.Codec<AutoupdateSettings, AutoupdateSettings, never, never>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type CreateDeploymentPublicApiDto = {
    readonly "name": string;
    readonly "container_registry_settings": ContainerRegistrySettingsPublicApiDto;
    readonly "containers": ReadonlyArray<ContainerPublicApiDto>;
    readonly "compute": ComputeResource;
    readonly "scaling": CreateScalingOptionsPublicApiDto;
    readonly "is_spot"?: boolean;
    readonly "is_verda_io"?: boolean;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const CreateDeploymentPublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly scaling: Schema.suspend<Schema.Codec<CreateScalingOptionsPublicApiDto, CreateScalingOptionsPublicApiDto, never, never>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
    readonly is_verda_io: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeployContainerDeploymentTemplatePublicApiDto = {
    readonly "name": string;
    readonly "variant"?: string;
    readonly "features"?: ReadonlyArray<string>;
    readonly "compute"?: ComputeResource;
    readonly "hf_token_secret_name"?: string;
    readonly "shm_size_mb"?: 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
    readonly "scaling"?: PatchScalingOptionsPublicApiDto;
} & {
    readonly [x: string]: Schema.Json;
};
export declare const DeployContainerDeploymentTemplatePublicApiDto: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly variant: Schema.optionalKey<Schema.String>;
    readonly features: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>>;
    readonly hf_token_secret_name: Schema.optionalKey<Schema.String>;
    readonly shm_size_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
    readonly scaling: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScalingOptionsPublicApiDto, PatchScalingOptionsPublicApiDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Oauth2ControllerGetAccessTokenRequestJson = GetAccessTokenDto | RefreshAccessTokenPublicApiDto;
export declare const Oauth2ControllerGetAccessTokenRequestJson: Schema.Union<readonly [Schema.StructWithRest<Schema.Struct<{
    readonly grant_type: Schema.Literals<readonly ["client_credentials", "refresh_token"]>;
    readonly client_id: Schema.String;
    readonly client_secret: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>, Schema.StructWithRest<Schema.Struct<{
    readonly grant_type: Schema.Literals<readonly ["client_credentials", "refresh_token"]>;
    readonly refresh_token: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>;
export type Oauth2ControllerGetAccessToken200 = GetAccessTokenResponseDto;
export declare const Oauth2ControllerGetAccessToken200: Schema.StructWithRest<Schema.Struct<{
    readonly access_token: Schema.String;
    readonly token_type: Schema.String;
    readonly expires_in: Schema.Number;
    readonly refresh_token: Schema.String;
    readonly scope: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Oauth2ControllerGetAccessToken400 = PublicApiErrorResponseDto;
export declare const Oauth2ControllerGetAccessToken400: Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.Literals<readonly ["invalid_request", "unauthorized_request", "insufficient_funds", "forbidden_action", "not_found", "conflict", "server_error", "service_unavailable"]>;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type Oauth2ControllerGetAccessToken401 = PublicApiErrorResponseDto;
export declare const Oauth2ControllerGetAccessToken401: Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.Literals<readonly ["invalid_request", "unauthorized_request", "insufficient_funds", "forbidden_action", "not_found", "conflict", "server_error", "service_unavailable"]>;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type BalanceControllerGetBalance200 = BalanceResponseDto;
export declare const BalanceControllerGetBalance200: Schema.StructWithRest<Schema.Struct<{
    readonly amount: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ImagesControllerGetImageTypesParams = {
    readonly "instance_type"?: string;
};
export declare const ImagesControllerGetImageTypesParams: Schema.Struct<{
    readonly instance_type: Schema.optionalKey<Schema.String>;
}>;
export type ImagesControllerGetImageTypes200 = ReadonlyArray<Os>;
export declare const ImagesControllerGetImageTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly image_type: Schema.String;
    readonly name: Schema.String;
    readonly is_default: Schema.Boolean;
    readonly details: Schema.$Array<Schema.String>;
    readonly category: Schema.String;
    readonly is_cluster: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ImagesControllerGetClusterImageTypesParams = {
    readonly "instance_type"?: string;
};
export declare const ImagesControllerGetClusterImageTypesParams: Schema.Struct<{
    readonly instance_type: Schema.optionalKey<Schema.String>;
}>;
export type ImagesControllerGetClusterImageTypes200 = ReadonlyArray<Os>;
export declare const ImagesControllerGetClusterImageTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly image_type: Schema.String;
    readonly name: Schema.String;
    readonly is_default: Schema.Boolean;
    readonly details: Schema.$Array<Schema.String>;
    readonly category: Schema.String;
    readonly is_cluster: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type AuditLogControllerGetAuditLogParams = {
    readonly "action"?: "other" | "create" | "start" | "start_complete" | "shutdown_complete" | "shutdown" | "delete" | "delete_complete" | "attach" | "attach_complete" | "detach" | "detach_complete" | "clone" | "resize" | "rename" | "transfer" | "trash" | "trash_complete" | "restore" | "cancel" | "provisioning" | "running" | "configure_spot" | "authenticate" | "expire" | "accept" | "update_role" | "revoke" | "login" | "logout" | "login_failed" | "auth_mfa_enable" | "auth_mfa_disable" | "auth_mfa_challenge" | "auth_mfa_verify" | "password_reset" | "complete" | "redeem" | "suspend" | "unsuspend" | "approve" | "decline" | "update" | "rotate_secret" | "disable" | "enable";
    readonly "object_type"?: "compute" | "volume" | "ssh_key" | "invite" | "user" | "member" | "cloud_api_credential" | "object_storage_bucket" | "object_storage_key_pair" | "custom_image" | "startup_script" | "topup" | "coupon" | "bank_transfer" | "bank_transfer_account" | "balance" | "other" | "object_storage" | "quota_request" | "webhook" | "auto_top_up";
    readonly "start_date"?: string;
    readonly "end_date"?: string;
    readonly "page_size"?: number;
    readonly "cursor"?: string;
};
export declare const AuditLogControllerGetAuditLogParams: Schema.Struct<{
    readonly action: Schema.optionalKey<Schema.Literals<readonly ["other", "create", "start", "start_complete", "shutdown_complete", "shutdown", "delete", "delete_complete", "attach", "attach_complete", "detach", "detach_complete", "clone", "resize", "rename", "transfer", "trash", "trash_complete", "restore", "cancel", "provisioning", "running", "configure_spot", "authenticate", "expire", "accept", "update_role", "revoke", "login", "logout", "login_failed", "auth_mfa_enable", "auth_mfa_disable", "auth_mfa_challenge", "auth_mfa_verify", "password_reset", "complete", "redeem", "suspend", "unsuspend", "approve", "decline", "update", "rotate_secret", "disable", "enable"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume", "ssh_key", "invite", "user", "member", "cloud_api_credential", "object_storage_bucket", "object_storage_key_pair", "custom_image", "startup_script", "topup", "coupon", "bank_transfer", "bank_transfer_account", "balance", "other", "object_storage", "quota_request", "webhook", "auto_top_up"]>>;
    readonly start_date: Schema.optionalKey<Schema.String>;
    readonly end_date: Schema.optionalKey<Schema.String>;
    readonly page_size: Schema.optionalKey<Schema.Number>;
    readonly cursor: Schema.optionalKey<Schema.String>;
}>;
export type AuditLogControllerGetAuditLog200 = GetAuditLogResponseListDto;
export declare const AuditLogControllerGetAuditLog200: Schema.StructWithRest<Schema.Struct<{
    readonly data: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly specversion: Schema.String;
        readonly id: Schema.String;
        readonly source: Schema.String;
        readonly type: Schema.String;
        readonly subject: Schema.String;
        readonly time: Schema.String;
        readonly data: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly cursor: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AuditLogControllerDownloadAuditLogRequestJson = DownloadAuditLogParamsDto;
export declare const AuditLogControllerDownloadAuditLogRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.optionalKey<Schema.Literals<readonly ["other", "create", "start", "start_complete", "shutdown_complete", "shutdown", "delete", "delete_complete", "attach", "attach_complete", "detach", "detach_complete", "clone", "resize", "rename", "transfer", "trash", "trash_complete", "restore", "cancel", "provisioning", "running", "configure_spot", "authenticate", "expire", "accept", "update_role", "revoke", "login", "logout", "login_failed", "auth_mfa_enable", "auth_mfa_disable", "auth_mfa_challenge", "auth_mfa_verify", "password_reset", "complete", "redeem", "suspend", "unsuspend", "approve", "decline", "update", "rotate_secret", "disable", "enable"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume", "ssh_key", "invite", "user", "member", "cloud_api_credential", "object_storage_bucket", "object_storage_key_pair", "custom_image", "startup_script", "topup", "coupon", "bank_transfer", "bank_transfer_account", "balance", "other", "object_storage", "quota_request", "webhook", "auto_top_up"]>>;
    readonly start_date: Schema.optionalKey<Schema.String>;
    readonly end_date: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type AuditLogControllerDownloadAuditLog200 = DownloadAuditLogResponseDto;
export declare const AuditLogControllerDownloadAuditLog200: Schema.StructWithRest<Schema.Struct<{
    readonly url: Schema.String;
    readonly expires_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type JournalControllerGetJournalParams = {
    readonly "page"?: number;
    readonly "pageSize"?: number;
    readonly "compute_id"?: string;
    readonly "volume_id"?: string;
    readonly "action_code"?: "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
    readonly "object_type"?: "compute" | "volume";
    readonly "hydrate"?: boolean;
};
export declare const JournalControllerGetJournalParams: Schema.Struct<{
    readonly page: Schema.optionalKey<Schema.Number>;
    readonly pageSize: Schema.optionalKey<Schema.Number>;
    readonly compute_id: Schema.optionalKey<Schema.String>;
    readonly volume_id: Schema.optionalKey<Schema.String>;
    readonly action_code: Schema.optionalKey<Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume"]>>;
    readonly hydrate: Schema.optionalKey<Schema.Boolean>;
}>;
export type JournalControllerGetJournal200 = ReadonlyArray<GetActivityJournalResponseDto>;
export declare const JournalControllerGetJournal200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly object_id: Schema.String;
    readonly object_type: Schema.Literals<readonly ["compute", "volume"]>;
    readonly action_code: Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>;
    readonly actor_id: Schema.optionalKey<Schema.String>;
    readonly actor_email: Schema.optionalKey<Schema.String>;
    readonly project_id: Schema.String;
    readonly timestamp: Schema.String;
    readonly location_code: Schema.String;
    readonly request_origin: Schema.optionalKey<Schema.String>;
    readonly request_ip: Schema.optionalKey<Schema.String>;
    readonly error_message: Schema.optionalKey<Schema.String>;
    readonly parent_id: Schema.optionalKey<Schema.String>;
    readonly service: Schema.optionalKey<Schema.String>;
    readonly target_location_code: Schema.optionalKey<Schema.String>;
    readonly volume: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityVolumeDto, ActivityVolumeDto, never, never>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityComputeDto, ActivityComputeDto, never, never>>>;
    readonly target_volume_id: Schema.optionalKey<Schema.String>;
    readonly target_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly target_compute_id: Schema.optionalKey<Schema.String>;
    readonly target_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_volume_id: Schema.optionalKey<Schema.String>;
    readonly source_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_compute_id: Schema.optionalKey<Schema.String>;
    readonly source_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly properties: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type JournalControllerGetComputeJournalParams = {
    readonly "page"?: number;
    readonly "pageSize"?: number;
    readonly "compute_id"?: string;
    readonly "volume_id"?: string;
    readonly "action_code"?: "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
    readonly "object_type"?: "compute" | "volume";
    readonly "hydrate"?: boolean;
};
export declare const JournalControllerGetComputeJournalParams: Schema.Struct<{
    readonly page: Schema.optionalKey<Schema.Number>;
    readonly pageSize: Schema.optionalKey<Schema.Number>;
    readonly compute_id: Schema.optionalKey<Schema.String>;
    readonly volume_id: Schema.optionalKey<Schema.String>;
    readonly action_code: Schema.optionalKey<Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume"]>>;
    readonly hydrate: Schema.optionalKey<Schema.Boolean>;
}>;
export type JournalControllerGetComputeJournal200 = ReadonlyArray<GetActivityJournalResponseDto>;
export declare const JournalControllerGetComputeJournal200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly object_id: Schema.String;
    readonly object_type: Schema.Literals<readonly ["compute", "volume"]>;
    readonly action_code: Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>;
    readonly actor_id: Schema.optionalKey<Schema.String>;
    readonly actor_email: Schema.optionalKey<Schema.String>;
    readonly project_id: Schema.String;
    readonly timestamp: Schema.String;
    readonly location_code: Schema.String;
    readonly request_origin: Schema.optionalKey<Schema.String>;
    readonly request_ip: Schema.optionalKey<Schema.String>;
    readonly error_message: Schema.optionalKey<Schema.String>;
    readonly parent_id: Schema.optionalKey<Schema.String>;
    readonly service: Schema.optionalKey<Schema.String>;
    readonly target_location_code: Schema.optionalKey<Schema.String>;
    readonly volume: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityVolumeDto, ActivityVolumeDto, never, never>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityComputeDto, ActivityComputeDto, never, never>>>;
    readonly target_volume_id: Schema.optionalKey<Schema.String>;
    readonly target_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly target_compute_id: Schema.optionalKey<Schema.String>;
    readonly target_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_volume_id: Schema.optionalKey<Schema.String>;
    readonly source_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_compute_id: Schema.optionalKey<Schema.String>;
    readonly source_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly properties: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type JournalControllerGetVolumeJournalParams = {
    readonly "page"?: number;
    readonly "pageSize"?: number;
    readonly "compute_id"?: string;
    readonly "volume_id"?: string;
    readonly "action_code"?: "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
    readonly "object_type"?: "compute" | "volume";
    readonly "hydrate"?: boolean;
};
export declare const JournalControllerGetVolumeJournalParams: Schema.Struct<{
    readonly page: Schema.optionalKey<Schema.Number>;
    readonly pageSize: Schema.optionalKey<Schema.Number>;
    readonly compute_id: Schema.optionalKey<Schema.String>;
    readonly volume_id: Schema.optionalKey<Schema.String>;
    readonly action_code: Schema.optionalKey<Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>>;
    readonly object_type: Schema.optionalKey<Schema.Literals<readonly ["compute", "volume"]>>;
    readonly hydrate: Schema.optionalKey<Schema.Boolean>;
}>;
export type JournalControllerGetVolumeJournal200 = ReadonlyArray<GetActivityJournalResponseDto>;
export declare const JournalControllerGetVolumeJournal200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly object_id: Schema.String;
    readonly object_type: Schema.Literals<readonly ["compute", "volume"]>;
    readonly action_code: Schema.Literals<readonly ["create", "start", "start:complete", "shutdown:complete", "shutdown", "delete", "delete:complete", "attach", "attach:complete", "detach", "detach:complete", "clone", "resize", "rename", "restore", "transfer", "trash", "trash:complete", "configure_spot", "cancel", "provisioning", "running", "installation:failed", "validating", "deleting", "error"]>;
    readonly actor_id: Schema.optionalKey<Schema.String>;
    readonly actor_email: Schema.optionalKey<Schema.String>;
    readonly project_id: Schema.String;
    readonly timestamp: Schema.String;
    readonly location_code: Schema.String;
    readonly request_origin: Schema.optionalKey<Schema.String>;
    readonly request_ip: Schema.optionalKey<Schema.String>;
    readonly error_message: Schema.optionalKey<Schema.String>;
    readonly parent_id: Schema.optionalKey<Schema.String>;
    readonly service: Schema.optionalKey<Schema.String>;
    readonly target_location_code: Schema.optionalKey<Schema.String>;
    readonly volume: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityVolumeDto, ActivityVolumeDto, never, never>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ActivityComputeDto, ActivityComputeDto, never, never>>>;
    readonly target_volume_id: Schema.optionalKey<Schema.String>;
    readonly target_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly target_compute_id: Schema.optionalKey<Schema.String>;
    readonly target_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_volume_id: Schema.optionalKey<Schema.String>;
    readonly source_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly created_at: Schema.String;
        readonly gb: Schema.Number;
        readonly is_shared_fs: Schema.Boolean;
        readonly template_type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
        readonly location_code: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly source_compute_id: Schema.optionalKey<Schema.String>;
    readonly source_compute: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly hostname: Schema.String;
        readonly compute_type: Schema.String;
        readonly is_cluster: Schema.Boolean;
        readonly ip: Schema.optionalKey<Schema.String>;
        readonly os_volume_id: Schema.optionalKey<Schema.String>;
        readonly location_code: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly properties: Schema.optionalKey<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type VolumesControllerGetVolumesParams = {
    readonly "status"?: "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
};
export declare const VolumesControllerGetVolumesParams: Schema.Struct<{
    readonly status: Schema.optionalKey<Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>>;
}>;
export type VolumesControllerGetVolumes200 = ReadonlyArray<GetVolumePublicResponseDto>;
export declare const VolumesControllerGetVolumes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly pseudo_path: Schema.String;
    readonly create_directory_command: Schema.String;
    readonly mount_command: Schema.String;
    readonly filesystem_to_fstab_command: Schema.String;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly long_term: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type VolumesControllerPerformActionsParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const VolumesControllerPerformActionsParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type VolumesControllerPerformActionsRequestJson = PerformVolumeActionPublicDto;
export declare const VolumesControllerPerformActionsRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["attach", "detach", "delete", "rename", "resize", "restore", "clone", "cancel", "create", "export", "transfer"]>;
    readonly id: Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>;
    readonly size: Schema.optionalKey<Schema.Number>;
    readonly instance_id: Schema.optionalKey<Schema.String>;
    readonly instance_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly type: Schema.optionalKey<Schema.String>;
    readonly is_permanent: Schema.optionalKey<Schema.Boolean>;
    readonly location_code: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumesControllerCreateVolumeParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const VolumesControllerCreateVolumeParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type VolumesControllerCreateVolumeRequestJson = CreateVolumePublicDto;
export declare const VolumesControllerCreateVolumeRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location_code: Schema.String;
    readonly size: Schema.Number;
    readonly instance_id: Schema.optionalKey<Schema.String>;
    readonly instance_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly name: Schema.String;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumesControllerGetVolumesInTrash200 = ReadonlyArray<GetVolumeInTrashPublicResponseDto>;
export declare const VolumesControllerGetVolumesInTrash200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly deleted_at: Schema.String;
    readonly is_permanently_deleted: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type VolumesControllerGetVolumeById200 = GetVolumePublicResponseDto | GetVolumeInTrashPublicResponseDto;
export declare const VolumesControllerGetVolumeById200: Schema.Union<readonly [Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly pseudo_path: Schema.String;
    readonly create_directory_command: Schema.String;
    readonly mount_command: Schema.String;
    readonly filesystem_to_fstab_command: Schema.String;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly long_term: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>, Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly instance_id: Schema.String;
    readonly instances: Schema.$Array<Schema.String>;
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly status: Schema.Literals<readonly ["ordered", "attached", "attaching", "detached", "deleted", "cloning", "detaching", "deleting", "restoring", "created", "exported", "canceled", "canceling"]>;
    readonly size: Schema.Number;
    readonly is_os_volume: Schema.Boolean;
    readonly target: Schema.String;
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly location: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.String;
    readonly base_hourly_cost: Schema.Number;
    readonly monthly_price: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly deleted_at: Schema.String;
    readonly is_permanently_deleted: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>;
export type VolumesControllerDeleteVolumeByIdParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const VolumesControllerDeleteVolumeByIdParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type VolumesControllerDeleteVolumeByIdRequestJson = DeleteVolumePublicDto;
export declare const VolumesControllerDeleteVolumeByIdRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly is_permanent: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumesControllerAddTagRequestJson = TagDto;
export declare const VolumesControllerAddTagRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly key: Schema.String;
    readonly value: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumesControllerAddTag201 = TagResponseDto;
export declare const VolumesControllerAddTag201: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly key: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type VolumeTypesControllerGetVolumeTypesParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const VolumeTypesControllerGetVolumeTypesParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type VolumeTypesControllerGetVolumeTypes200 = ReadonlyArray<VolumeType>;
export declare const VolumeTypesControllerGetVolumeTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    readonly price: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly is_shared_fs: Schema.Boolean;
    readonly burst_bandwidth: Schema.Number;
    readonly continuous_bandwidth: Schema.Number;
    readonly internal_network_speed: Schema.Number;
    readonly iops: Schema.String;
    readonly throughput_gbps: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstancesControllerGetInstancesParams = {
    readonly "status"?: "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
    readonly "computeId"?: string;
    readonly "tag"?: ReadonlyArray<string>;
};
export declare const InstancesControllerGetInstancesParams: Schema.Struct<{
    readonly status: Schema.optionalKey<Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>>;
    readonly computeId: Schema.optionalKey<Schema.String>;
    readonly tag: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>;
export type InstancesControllerGetInstances200 = ReadonlyArray<GetInstanceResponsePublicApiDto>;
export declare const InstancesControllerGetInstances200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly storage: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly is_spot: Schema.Boolean;
    readonly instance_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly os_volume_id: Schema.String;
    readonly jupyter_token: Schema.String;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO", "SPOT"]>;
    readonly pricing: Schema.Literals<readonly ["DYNAMIC_PRICE", "FIXED_PRICE"]>;
    readonly volume_ids: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstancesControllerPerformActionsParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const InstancesControllerPerformActionsParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type InstancesControllerPerformActionsRequestJson = PerformInstanceActionPublicDto;
export declare const InstancesControllerPerformActionsRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly id: Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>;
    readonly volume_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly delete_permanently: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstancesControllerPerformActions202 = ReadonlyArray<InstanceActionResultDto>;
export declare const InstancesControllerPerformActions202: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly instanceId: Schema.String;
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly status: Schema.Literals<readonly ["success", "error"]>;
    readonly error: Schema.optionalKey<Schema.String>;
    readonly statusCode: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstancesControllerPerformActions207 = ReadonlyArray<InstanceActionResultDto>;
export declare const InstancesControllerPerformActions207: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly instanceId: Schema.String;
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly status: Schema.Literals<readonly ["success", "error"]>;
    readonly error: Schema.optionalKey<Schema.String>;
    readonly statusCode: Schema.optionalKey<Schema.Number>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstancesControllerDeployInstanceParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const InstancesControllerDeployInstanceParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type InstancesControllerDeployInstanceRequestJson = DeployInstancePublicDto;
export declare const InstancesControllerDeployInstanceRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly instance_type: Schema.String;
    readonly image: Schema.String;
    readonly ssh_key_ids: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly hostname: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly location_code: Schema.String;
    readonly os_volume: Schema.optionalKey<Schema.suspend<Schema.Codec<OsVolumeDto, OsVolumeDto, never, never>>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
    readonly coupon: Schema.optionalKey<Schema.String>;
    readonly volumes: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly size: Schema.Number;
        readonly on_spot_discontinue: Schema.optionalKey<Schema.Literals<readonly ["keep_detached", "move_to_trash", "delete_permanently"]>>;
        readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly key: Schema.String;
            readonly value: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly type: Schema.Literals<readonly ["HDD", "NVMe", "HDD_Shared", "NVMe_Shared", "NVMe_Local_Storage", "NVMe_Shared_Cluster", "NVMe_OS_Cluster"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly existing_volumes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly contract: Schema.optionalKey<Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO", "SPOT"]>>;
    readonly pricing: Schema.optionalKey<Schema.Literals<readonly ["DYNAMIC_PRICE", "FIXED_PRICE"]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstancesControllerGetInstanceById200 = GetInstanceResponsePublicApiDto;
export declare const InstancesControllerGetInstanceById200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly storage: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly is_spot: Schema.Boolean;
    readonly instance_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.String;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly os_volume_id: Schema.String;
    readonly jupyter_token: Schema.String;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO", "SPOT"]>;
    readonly pricing: Schema.Literals<readonly ["DYNAMIC_PRICE", "FIXED_PRICE"]>;
    readonly volume_ids: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstancesControllerPerformActionDeprecatedParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const InstancesControllerPerformActionDeprecatedParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type InstancesControllerPerformActionDeprecatedRequestJson = PerformInstanceActionPublicDto;
export declare const InstancesControllerPerformActionDeprecatedRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["boot", "start", "shutdown", "delete", "discontinue", "hibernate", "configure_spot", "force_shutdown", "delete_stuck", "deploy", "transfer"]>;
    readonly id: Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>;
    readonly volume_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly delete_permanently: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstancesControllerAddTagRequestJson = TagDto;
export declare const InstancesControllerAddTagRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly key: Schema.String;
    readonly value: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstancesControllerAddTag201 = TagResponseDto;
export declare const InstancesControllerAddTag201: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly key: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerGetInstances200 = ReadonlyArray<GetClusterResponsePublicApiDto>;
export declare const ClustersControllerGetInstances200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly cluster_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO"]>;
    readonly auto_rental_extension: Schema.optionalKey<Schema.Boolean>;
    readonly turn_to_pay_as_you_go: Schema.optionalKey<Schema.Boolean>;
    readonly extension_settings: Schema.optionalKey<Schema.Literals<readonly ["auto_renew", "pay_as_you_go", "end_contract"]>>;
    readonly long_term_period: Schema.optionalKey<Schema.String>;
    readonly worker_nodes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly shared_volumes: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ClustersControllerPerformActionsParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const ClustersControllerPerformActionsParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type ClustersControllerPerformActionsRequestJson = PerformClusterActionsBulkDto;
export declare const ClustersControllerPerformActionsRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly actions: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly action: Schema.Literal<"discontinue">;
        readonly id: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerDeployClusterParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const ClustersControllerDeployClusterParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type ClustersControllerDeployClusterRequestJson = DeployClusterPublicDto;
export declare const ClustersControllerDeployClusterRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly cluster_type: Schema.String;
    readonly image: Schema.String;
    readonly ssh_key_ids: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly hostname: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly tags: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly key: Schema.String;
        readonly value: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly location_code: Schema.String;
    readonly contract: Schema.optionalKey<Schema.Literals<readonly ["PAY_AS_YOU_GO", "LONG_TERM"]>>;
    readonly extension_settings: Schema.optionalKey<Schema.Literals<readonly ["auto_renew", "pay_as_you_go", "end_contract"]>>;
    readonly auto_rental_extension: Schema.optionalKey<Schema.Boolean>;
    readonly turn_to_pay_as_you_go: Schema.optionalKey<Schema.Boolean>;
    readonly shared_volume: Schema.suspend<Schema.Codec<SharedVolumeDto, SharedVolumeDto, never, never>>;
    readonly existing_volumes: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerDeployCluster202 = DeployClusterResponsePublicApiDto;
export declare const ClustersControllerDeployCluster202: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerGetClusterById200 = GetClusterResponsePublicApiDto;
export declare const ClustersControllerGetClusterById200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly ip: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "provisioning", "offline", "discontinued", "unknown", "ordered", "notfound", "new", "error", "deleting", "validating", "no_capacity", "installation_failed"]>;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.optionalKey<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly hostname: Schema.String;
    readonly description: Schema.String;
    readonly tags: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly key: Schema.String;
        readonly value: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly location: Schema.String;
    readonly price_per_hour: Schema.Number;
    readonly cluster_type: Schema.String;
    readonly image: Schema.String;
    readonly os_name: Schema.String;
    readonly startup_script_id: Schema.optionalKey<Schema.String>;
    readonly ssh_key_ids: Schema.$Array<Schema.String>;
    readonly contract: Schema.Literals<readonly ["LONG_TERM", "PAY_AS_YOU_GO"]>;
    readonly auto_rental_extension: Schema.optionalKey<Schema.Boolean>;
    readonly turn_to_pay_as_you_go: Schema.optionalKey<Schema.Boolean>;
    readonly extension_settings: Schema.optionalKey<Schema.Literals<readonly ["auto_renew", "pay_as_you_go", "end_contract"]>>;
    readonly long_term_period: Schema.optionalKey<Schema.String>;
    readonly worker_nodes: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly shared_volumes: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerPerformClusterNodeActionParams = {
    readonly "user-agent": string;
    readonly "cf-connecting-ip": string;
};
export declare const ClustersControllerPerformClusterNodeActionParams: Schema.Struct<{
    readonly "user-agent": Schema.String;
    readonly "cf-connecting-ip": Schema.String;
}>;
export type ClustersControllerPerformClusterNodeActionRequestJson = PerformClusterNodeActionPublicDto;
export declare const ClustersControllerPerformClusterNodeActionRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly action: Schema.Literals<readonly ["boot", "shutdown", "force_shutdown"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerAddTagRequestJson = TagDto;
export declare const ClustersControllerAddTagRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly key: Schema.String;
    readonly value: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ClustersControllerAddTag201 = TagResponseDto;
export declare const ClustersControllerAddTag201: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly key: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceTypesControllerGetInstanceTypesParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const InstanceTypesControllerGetInstanceTypesParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type InstanceTypesControllerGetInstanceTypes200 = ReadonlyArray<InstanceType>;
export declare const InstanceTypesControllerGetInstanceTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly best_for: Schema.$Array<Schema.String>;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly deploy_warning: Schema.optionalKey<Schema.String>;
    readonly description: Schema.String;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly id: Schema.String;
    readonly instance_type: Schema.String;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly p2p: Schema.String;
    readonly price_per_hour: Schema.String;
    readonly spot_price: Schema.String;
    readonly dynamic_price: Schema.optionalKey<Schema.String>;
    readonly max_dynamic_price: Schema.String;
    readonly serverless_price: Schema.optionalKey<Schema.String>;
    readonly serverless_spot_price: Schema.optionalKey<Schema.String>;
    readonly storage: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
    readonly display_name: Schema.String;
    readonly supported_os: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstanceAvailabilityControllerGetAllAvailabilitiesParams = {
    readonly "isSpot"?: string;
    readonly "locationCode"?: string;
    readonly "is_spot"?: string;
    readonly "location_code"?: string;
};
export declare const InstanceAvailabilityControllerGetAllAvailabilitiesParams: Schema.Struct<{
    readonly isSpot: Schema.optionalKey<Schema.String>;
    readonly locationCode: Schema.optionalKey<Schema.String>;
    readonly is_spot: Schema.optionalKey<Schema.String>;
    readonly location_code: Schema.optionalKey<Schema.String>;
}>;
export type InstanceAvailabilityControllerGetAllAvailabilities200 = ReadonlyArray<InstanceAvailabilityResponseDto>;
export declare const InstanceAvailabilityControllerGetAllAvailabilities200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly location_code: Schema.String;
    readonly availabilities: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstanceAvailabilityControllerCheckAvailabilityParams = {
    readonly "isSpot"?: string;
    readonly "locationCode"?: string;
    readonly "is_spot"?: string;
    readonly "location_code"?: string;
};
export declare const InstanceAvailabilityControllerCheckAvailabilityParams: Schema.Struct<{
    readonly isSpot: Schema.optionalKey<Schema.String>;
    readonly locationCode: Schema.optionalKey<Schema.String>;
    readonly is_spot: Schema.optionalKey<Schema.String>;
    readonly location_code: Schema.optionalKey<Schema.String>;
}>;
export type InstanceAvailabilityControllerCheckAvailability200 = boolean;
export declare const InstanceAvailabilityControllerCheckAvailability200: Schema.Boolean;
export type ClusterAvailabilityControllerGetAllAvailabilitiesParams = {
    readonly "location_code"?: string;
};
export declare const ClusterAvailabilityControllerGetAllAvailabilitiesParams: Schema.Struct<{
    readonly location_code: Schema.optionalKey<Schema.String>;
}>;
export type ClusterAvailabilityControllerGetAllAvailabilities200 = ReadonlyArray<ClusterAvailabilityResponseDto>;
export declare const ClusterAvailabilityControllerGetAllAvailabilities200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly location_code: Schema.String;
    readonly availabilities: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ClusterAvailabilityControllerCheckAvailabilityParams = {
    readonly "location_code"?: string;
};
export declare const ClusterAvailabilityControllerCheckAvailabilityParams: Schema.Struct<{
    readonly location_code: Schema.optionalKey<Schema.String>;
}>;
export type ClusterAvailabilityControllerCheckAvailability200 = boolean;
export declare const ClusterAvailabilityControllerCheckAvailability200: Schema.Boolean;
export type SshkeysControllerGetKeys200 = ReadonlyArray<GetKeysResponseDto>;
export declare const SshkeysControllerGetKeys200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly key: Schema.String;
    readonly fingerprint: Schema.String;
    readonly created_by_user_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type SshkeysControllerAddKeyRequestJson = AddKeyDto;
export declare const SshkeysControllerAddKeyRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly key: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SshkeysControllerDeleteKeysRequestJson = DeleteKeysPublicDto;
export declare const SshkeysControllerDeleteKeysRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly keys: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type SshkeysControllerGetKey200 = GetKeysResponseDto;
export declare const SshkeysControllerGetKey200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly key: Schema.String;
    readonly fingerprint: Schema.String;
    readonly created_by_user_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeprecatedSshkeysControllerGetKeys200 = ReadonlyArray<GetKeysResponseDto>;
export declare const DeprecatedSshkeysControllerGetKeys200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly key: Schema.String;
    readonly fingerprint: Schema.String;
    readonly created_by_user_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type DeprecatedSshkeysControllerAddKeyRequestJson = AddKeyDto;
export declare const DeprecatedSshkeysControllerAddKeyRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly key: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeprecatedSshkeysControllerDeleteKeysRequestJson = DeleteKeysPublicDto;
export declare const DeprecatedSshkeysControllerDeleteKeysRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly keys: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeprecatedSshkeysControllerGetKey200 = GetKeysResponseDto;
export declare const DeprecatedSshkeysControllerGetKey200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly key: Schema.String;
    readonly fingerprint: Schema.String;
    readonly created_by_user_id: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScriptsControllerGetScriptsParams = {
    readonly "page"?: number;
    readonly "pageSize"?: number;
    readonly "name"?: string;
    readonly "orderBy"?: "created_at";
    readonly "orderDirection"?: "asc" | "desc";
};
export declare const ScriptsControllerGetScriptsParams: Schema.Struct<{
    readonly page: Schema.optionalKey<Schema.Number>;
    readonly pageSize: Schema.optionalKey<Schema.Number>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly orderBy: Schema.optionalKey<Schema.Literal<"created_at">>;
    readonly orderDirection: Schema.optionalKey<Schema.Literals<readonly ["asc", "desc"]>>;
}>;
export type ScriptsControllerGetScripts200 = ReadonlyArray<GetScriptResponseDto>;
export declare const ScriptsControllerGetScripts200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly script: Schema.String;
    readonly created_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ScriptsControllerAddScriptRequestJson = AddScriptDto;
export declare const ScriptsControllerAddScriptRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly script: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScriptsControllerDeleteScriptsRequestJson = DeleteScriptsDto;
export declare const ScriptsControllerDeleteScriptsRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly scripts: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScriptsControllerGetScript200 = GetScriptResponseDto;
export declare const ScriptsControllerGetScript200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly script: Schema.String;
    readonly created_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type LocationsControllerGetVolumeTypes200 = ReadonlyArray<Location>;
export declare const LocationsControllerGetVolumeTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly country_code: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type LongTermControllerGetLongTermPeriodsDeprecated200 = ReadonlyArray<LongTermPeriodResponseDto>;
export declare const LongTermControllerGetLongTermPeriodsDeprecated200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly is_enabled: Schema.Boolean;
    readonly unit_name: Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>;
    readonly unit_value: Schema.Number;
    readonly discount_percentage: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type LongTermControllerGetLongTermPeriodsInstances200 = ReadonlyArray<LongTermPeriodResponseDto>;
export declare const LongTermControllerGetLongTermPeriodsInstances200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly is_enabled: Schema.Boolean;
    readonly unit_name: Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>;
    readonly unit_value: Schema.Number;
    readonly discount_percentage: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type LongTermControllerGetLongTermPeriodsClusters200 = ReadonlyArray<LongTermPeriodResponseDto>;
export declare const LongTermControllerGetLongTermPeriodsClusters200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly code: Schema.String;
    readonly name: Schema.String;
    readonly is_enabled: Schema.Boolean;
    readonly unit_name: Schema.Literals<readonly ["hour", "day", "week", "month", "year"]>;
    readonly unit_value: Schema.Number;
    readonly discount_percentage: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ClusterTypesControllerGetInstanceTypesParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const ClusterTypesControllerGetInstanceTypesParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type ClusterTypesControllerGetInstanceTypes200 = ReadonlyArray<ClusterType>;
export declare const ClusterTypesControllerGetInstanceTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly cluster_type: Schema.String;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly price_per_hour: Schema.String;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
    readonly node_details: Schema.$Array<Schema.String>;
    readonly supported_os: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ContainerTypesControllerGetContainerTypesParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const ContainerTypesControllerGetContainerTypesParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type ContainerTypesControllerGetContainerTypes200 = ReadonlyArray<ContainerType>;
export declare const ContainerTypesControllerGetContainerTypes200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly model: Schema.String;
    readonly name: Schema.String;
    readonly instance_type: Schema.String;
    readonly cpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly gpu_memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly memory: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly serverless_price: Schema.String;
    readonly serverless_spot_price: Schema.String;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
    readonly manufacturer: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ManagedEndpointsControllerGetPricingParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const ManagedEndpointsControllerGetPricingParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type ManagedEndpointsControllerGetPricing200 = ReadonlyArray<ManagedEndpointPrice>;
export declare const ManagedEndpointsControllerGetPricing200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly resource: Schema.String;
    readonly external_id: Schema.String;
    readonly unit_price: Schema.Number;
    readonly unit_name: Schema.Literals<readonly ["generation", "image", "video", "input_token", "output_token", "token", "audio_second", "video_second", "inference_second", "hour", "second", "minute", "undefined", "gpu_hour", "gb_hour", "gb_month", "request"]>;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ContainerRegistryControllerGetContainerRegistryPricingParams = {
    readonly "currency"?: "usd" | "eur";
};
export declare const ContainerRegistryControllerGetContainerRegistryPricingParams: Schema.Struct<{
    readonly currency: Schema.optionalKey<Schema.Literals<readonly ["usd", "eur"]>>;
}>;
export type ContainerRegistryControllerGetContainerRegistryPricing200 = ContainerRegistryPricingResponseDto;
export declare const ContainerRegistryControllerGetContainerRegistryPricing200: Schema.StructWithRest<Schema.Struct<{
    readonly price_per_month_per_gb: Schema.Number;
    readonly currency: Schema.Literals<readonly ["usd", "eur"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupsPublicControllerList200 = ReadonlyArray<InstanceGroupResponseDto>;
export declare const InstanceGroupsPublicControllerList200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly project_id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly deleted_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type InstanceGroupsPublicControllerCreateRequestJson = CreateInstanceGroupDto;
export declare const InstanceGroupsPublicControllerCreateRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly os_volume: Schema.optionalKey<Schema.StructWithRest<Schema.Struct<{
            readonly size: Schema.Number;
            readonly type: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly ssh_key_ids: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly startup_script_id: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupsPublicControllerCreate201 = InstanceGroupResponseDto;
export declare const InstanceGroupsPublicControllerCreate201: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly project_id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly deleted_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupsPublicControllerGet200 = InstanceGroupResponseDto;
export declare const InstanceGroupsPublicControllerGet200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly project_id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly deleted_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupsPublicControllerUpdateRequestJson = UpdateInstanceGroupDto;
export declare const InstanceGroupsPublicControllerUpdateRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.optionalKey<Schema.String>;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly template: Schema.optionalKey<Schema.suspend<Schema.Codec<MutableInstanceGroupTemplateDto, MutableInstanceGroupTemplateDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type InstanceGroupsPublicControllerUpdate200 = InstanceGroupResponseDto;
export declare const InstanceGroupsPublicControllerUpdate200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly project_id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly location_code: Schema.String;
    readonly instance_type: Schema.String;
    readonly template: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly created_at: Schema.String;
    readonly updated_at: Schema.String;
    readonly deleted_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeploymentLogsPublicApiControllerGetLogsParams = {
    readonly "container_name"?: string;
    readonly "pod"?: ReadonlyArray<string>;
    readonly "search_text"?: string;
    readonly "since"?: string;
    readonly "start"?: string;
    readonly "end"?: string;
    readonly "order"?: "asc" | "desc";
    readonly "limit"?: number;
};
export declare const DeploymentLogsPublicApiControllerGetLogsParams: Schema.Struct<{
    readonly container_name: Schema.optionalKey<Schema.String>;
    readonly pod: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly search_text: Schema.optionalKey<Schema.String>;
    readonly since: Schema.optionalKey<Schema.String>;
    readonly start: Schema.optionalKey<Schema.String>;
    readonly end: Schema.optionalKey<Schema.String>;
    readonly order: Schema.optionalKey<Schema.Literals<readonly ["asc", "desc"]>>;
    readonly limit: Schema.optionalKey<Schema.Number>;
}>;
export type DeploymentLogsPublicApiControllerGetLogs200 = ReadonlyArray<DeploymentLogEntryPublicApiResponseDto>;
export declare const DeploymentLogsPublicApiControllerGetLogs200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly container_name: Schema.String;
    readonly replica: Schema.String;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type JobLogsPublicApiControllerGetLogsParams = {
    readonly "container_name"?: string;
    readonly "pod"?: ReadonlyArray<string>;
    readonly "search_text"?: string;
    readonly "since"?: string;
    readonly "start"?: string;
    readonly "end"?: string;
    readonly "order"?: "asc" | "desc";
    readonly "limit"?: number;
};
export declare const JobLogsPublicApiControllerGetLogsParams: Schema.Struct<{
    readonly container_name: Schema.optionalKey<Schema.String>;
    readonly pod: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly search_text: Schema.optionalKey<Schema.String>;
    readonly since: Schema.optionalKey<Schema.String>;
    readonly start: Schema.optionalKey<Schema.String>;
    readonly end: Schema.optionalKey<Schema.String>;
    readonly order: Schema.optionalKey<Schema.Literals<readonly ["asc", "desc"]>>;
    readonly limit: Schema.optionalKey<Schema.Number>;
}>;
export type JobLogsPublicApiControllerGetLogs200 = ReadonlyArray<DeploymentLogEntryPublicApiResponseDto>;
export declare const JobLogsPublicApiControllerGetLogs200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly container_name: Schema.String;
    readonly replica: Schema.String;
    readonly message: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ScaledJobPublicApiControllerGetList200 = ReadonlyArray<ScaledJobShortInfoResponseDto>;
export declare const ScaledJobPublicApiControllerGetList200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ScaledJobPublicApiControllerCreateNewScaledJobRequestJson = CreateScaledJobDto;
export declare const ScaledJobPublicApiControllerCreateNewScaledJobRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerRegistrySettings, CreateScaledJobContainerRegistrySettings, never, never>>>;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volumeId: Schema.String;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly compute: Schema.suspend<Schema.Codec<CreateScaledJobComputeResourceDto, CreateScaledJobComputeResourceDto, never, never>>;
    readonly scaling: Schema.suspend<Schema.Codec<CreateScaledJobScalingOptionsDto, CreateScaledJobScalingOptionsDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerCreateNewScaledJob201 = ScaledJobResponseDto;
export declare const ScaledJobPublicApiControllerCreateNewScaledJob201: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.suspend<Schema.Codec<ImageInfoResponseDto, ImageInfoResponseDto, never, never>>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettingsResponseDto, HealthcheckSettingsResponseDto, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettingsResponseDto, EntrypointOverridesSettingsResponseDto, never, never>>>;
        readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly volume_mounts: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volume_id: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly should_use_cached_image: Schema.Boolean;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsResponseDto, ContainerRegistrySettingsResponseDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerGetByName200 = ScaledJobResponseDto;
export declare const ScaledJobPublicApiControllerGetByName200: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.suspend<Schema.Codec<ImageInfoResponseDto, ImageInfoResponseDto, never, never>>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettingsResponseDto, HealthcheckSettingsResponseDto, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettingsResponseDto, EntrypointOverridesSettingsResponseDto, never, never>>>;
        readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly volume_mounts: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volume_id: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly should_use_cached_image: Schema.Boolean;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsResponseDto, ContainerRegistrySettingsResponseDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerDeleteByNameParams = {
    readonly "timeout"?: number;
};
export declare const ScaledJobPublicApiControllerDeleteByNameParams: Schema.Struct<{
    readonly timeout: Schema.optionalKey<Schema.Number>;
}>;
export type ScaledJobPublicApiControllerUpdateScaledJobByNameRequestJson = PatchScaledJobDto;
export declare const ScaledJobPublicApiControllerUpdateScaledJobByNameRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerRegistrySettings, CreateScaledJobContainerRegistrySettings, never, never>>>;
    readonly containers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.optionalKey<Schema.String>;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.optionalKey<Schema.Number>;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerHealthcheckSettings, CreateScaledJobContainerHealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobContainerEntrypointOverridesSettings, CreateScaledJobContainerEntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volumeId: Schema.String;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<CreateScaledJobComputeResourceDto, CreateScaledJobComputeResourceDto, never, never>>>;
    readonly scaling: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScaledJobScalingOptionsDto, PatchScaledJobScalingOptionsDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerUpdateScaledJobByName200 = ScaledJobResponseDto;
export declare const ScaledJobPublicApiControllerUpdateScaledJobByName200: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.suspend<Schema.Codec<ImageInfoResponseDto, ImageInfoResponseDto, never, never>>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettingsResponseDto, HealthcheckSettingsResponseDto, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettingsResponseDto, EntrypointOverridesSettingsResponseDto, never, never>>>;
        readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly volume_mounts: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly type: Schema.Literals<readonly ["scratch", "shared", "secret", "memory"]>;
            readonly mount_path: Schema.String;
            readonly secret_name: Schema.optionalKey<Schema.String>;
            readonly size_in_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
            readonly volume_id: Schema.optionalKey<Schema.String>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
        readonly should_use_cached_image: Schema.Boolean;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly created_by_user_id: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsResponseDto, ContainerRegistrySettingsResponseDto, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerGetScalingOptionsByName200 = ScalingOptionsResponseDto;
export declare const ScaledJobPublicApiControllerGetScalingOptionsByName200: Schema.StructWithRest<Schema.Struct<{
    readonly max_replica_count: Schema.Number;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly deadline_seconds: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ScaledJobPublicApiControllerGetScaledJobStatusByName200 = GetScaledJobStatusResponseDto;
export declare const ScaledJobPublicApiControllerGetScaledJobStatusByName200: Schema.StructWithRest<Schema.Struct<{
    readonly status: Schema.Literals<readonly ["paused", "terminating", "running", "ready"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetDeploymentsList200 = ReadonlyArray<DeploymentPublicApiResponseDto>;
export declare const PublicApiControllerGetDeploymentsList200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerCreateNewDeploymentRequestJson = CreateDeploymentPublicApiDto;
export declare const PublicApiControllerCreateNewDeploymentRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly image: Schema.String;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly scaling: Schema.suspend<Schema.Codec<CreateScalingOptionsPublicApiDto, CreateScalingOptionsPublicApiDto, never, never>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
    readonly is_verda_io: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerCreateNewDeployment201 = DeploymentPublicApiResponseDto;
export declare const PublicApiControllerCreateNewDeployment201: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetDeploymentByName200 = DeploymentPublicApiResponseDto;
export declare const PublicApiControllerGetDeploymentByName200: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerDeleteDeploymentByNameParams = {
    readonly "timeout"?: number;
};
export declare const PublicApiControllerDeleteDeploymentByNameParams: Schema.Struct<{
    readonly timeout: Schema.optionalKey<Schema.Number>;
}>;
export type PublicApiControllerUpdateDeploymentByNameRequestJson = PatchDeploymentPublicApiDto;
export declare const PublicApiControllerUpdateDeploymentByNameRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly container_registry_settings: Schema.optionalKey<Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>>;
    readonly containers: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.optionalKey<Schema.Number>;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly autoupdate: Schema.optionalKey<Schema.suspend<Schema.Codec<AutoupdateSettings, AutoupdateSettings, never, never>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>>;
    readonly is_spot: Schema.optionalKey<Schema.Boolean>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerUpdateDeploymentByName200 = DeploymentPublicApiResponseDto;
export declare const PublicApiControllerUpdateDeploymentByName200: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetReplicasStatusByName200 = GetDeploymentStatusResponseDto;
export declare const PublicApiControllerGetReplicasStatusByName200: Schema.StructWithRest<Schema.Struct<{
    readonly status: Schema.Literals<readonly ["initializing", "healthy", "degraded", "unhealthy", "paused", "quota_reached", "image_pulling", "updating", "terminating"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetDeploymentScalingOptionsByName200 = ScalingOptionsPublicApiDto;
export declare const PublicApiControllerGetDeploymentScalingOptionsByName200: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.Number;
    readonly max_replica_count: Schema.Number;
    readonly scale_down_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly scale_up_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly concurrent_requests_per_replica: Schema.Number;
    readonly scaling_triggers: Schema.suspend<Schema.Codec<ScalingTriggers, ScalingTriggers, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerUpdateDeploymentScalingOptionsByNameRequestJson = PatchScalingOptionsPublicApiDto;
export declare const PublicApiControllerUpdateDeploymentScalingOptionsByNameRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.optionalKey<Schema.Number>;
    readonly max_replica_count: Schema.optionalKey<Schema.Number>;
    readonly scale_down_policy: Schema.optionalKey<Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>>;
    readonly scale_up_policy: Schema.optionalKey<Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>>;
    readonly queue_message_ttl_seconds: Schema.optionalKey<Schema.Number>;
    readonly concurrent_requests_per_replica: Schema.optionalKey<Schema.Number>;
    readonly scaling_triggers: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScalingTriggers, PatchScalingTriggers, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerUpdateDeploymentScalingOptionsByName200 = ScalingOptionsPublicApiDto;
export declare const PublicApiControllerUpdateDeploymentScalingOptionsByName200: Schema.StructWithRest<Schema.Struct<{
    readonly min_replica_count: Schema.Number;
    readonly max_replica_count: Schema.Number;
    readonly scale_down_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly scale_up_policy: Schema.suspend<Schema.Codec<ScalingPolicy, ScalingPolicy, never, never>>;
    readonly queue_message_ttl_seconds: Schema.Number;
    readonly concurrent_requests_per_replica: Schema.Number;
    readonly scaling_triggers: Schema.suspend<Schema.Codec<ScalingTriggers, ScalingTriggers, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetDeploymentReplicasByName200 = ReplicasPublicApiDto;
export declare const PublicApiControllerGetDeploymentReplicasByName200: Schema.StructWithRest<Schema.Struct<{
    readonly list: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly status: Schema.Literals<readonly ["unavailable", "initializing", "running", "terminating", "error", "imagepulling"]>;
        readonly started_at: Schema.String;
        readonly image: Schema.optionalKey<Schema.String>;
        readonly image_name: Schema.optionalKey<Schema.String>;
        readonly image_tag: Schema.optionalKey<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerGetDeploymentEnvironmentVariables200 = ReadonlyArray<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const PublicApiControllerGetDeploymentEnvironmentVariables200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerAddEnvironmentVariablesToContainerRequestJson = CreateOrPatchEnvironmentVariablesDto;
export declare const PublicApiControllerAddEnvironmentVariablesToContainerRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerAddEnvironmentVariablesToContainer200 = ReadonlyArray<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const PublicApiControllerAddEnvironmentVariablesToContainer200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerDeleteEnvironmentVariablesOfContainerRequestJson = DeleteEnvironmentVariablesPublicApiDto;
export declare const PublicApiControllerDeleteEnvironmentVariablesOfContainerRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerDeleteEnvironmentVariablesOfContainer200 = ReadonlyArray<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const PublicApiControllerDeleteEnvironmentVariablesOfContainer200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerUpdateEnvironmentVariablesOfContainerRequestJson = CreateOrPatchEnvironmentVariablesDto;
export declare const PublicApiControllerUpdateEnvironmentVariablesOfContainerRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerUpdateEnvironmentVariablesOfContainer200 = ReadonlyArray<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const PublicApiControllerUpdateEnvironmentVariablesOfContainer200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly container_name: Schema.String;
    readonly env: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly name: Schema.String;
        readonly value_or_reference_to_secret: Schema.String;
        readonly type: Schema.Literals<readonly ["plain", "secret"]>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerGetComputeAndAvailability200 = ReadonlyArray<GetComputeResourcesPublicApiResponseDto>;
export declare const PublicApiControllerGetComputeAndAvailability200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
    readonly is_available: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerGetSecrets200 = ReadonlyArray<GetSecretsPublicApiResponseDto>;
export declare const PublicApiControllerGetSecrets200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly secret_type: Schema.Literals<readonly ["generic", "file-secret"]>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerAddSecretRequestJson = CreateSecretPublicApiDto;
export declare const PublicApiControllerAddSecretRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly value: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerDeleteSecretParams = {
    readonly "force"?: boolean;
};
export declare const PublicApiControllerDeleteSecretParams: Schema.Struct<{
    readonly force: Schema.optionalKey<Schema.Boolean>;
}>;
export type PublicApiControllerGetFilesetSecrets200 = ReadonlyArray<GetFilesetSecretsPublicApiResponseDto>;
export declare const PublicApiControllerGetFilesetSecrets200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
    readonly secret_type: Schema.Literal<"file-secret">;
    readonly file_names: Schema.$Array<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerAddFilesetSecretRequestJson = CreateFilesetSecretPublicApiDto;
export declare const PublicApiControllerAddFilesetSecretRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly files: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly file_name: Schema.String;
        readonly base64_content: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerDeleteFilesetSecretParams = {
    readonly "force"?: boolean;
};
export declare const PublicApiControllerDeleteFilesetSecretParams: Schema.Struct<{
    readonly force: Schema.optionalKey<Schema.Boolean>;
}>;
export type PublicApiControllerGetRegistryCredentials200 = ReadonlyArray<GetRegistryCredentialsPublicApiResponseDto>;
export declare const PublicApiControllerGetRegistryCredentials200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly created_at: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type PublicApiControllerAddRegistryCredentialsRequestJson = CreateRegistryCredentialsPublicApiDto;
export declare const PublicApiControllerAddRegistryCredentialsRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly type: Schema.Literals<readonly ["verda", "gcr", "dockerhub", "ghcr", "aws-ecr", "scaleway", "custom"]>;
    readonly username: Schema.optionalKey<Schema.String>;
    readonly access_token: Schema.optionalKey<Schema.String>;
    readonly service_account_key: Schema.optionalKey<Schema.String>;
    readonly docker_config_json: Schema.optionalKey<Schema.String>;
    readonly access_key_id: Schema.optionalKey<Schema.String>;
    readonly secret_access_key: Schema.optionalKey<Schema.String>;
    readonly region: Schema.optionalKey<Schema.String>;
    readonly ecr_repo: Schema.optionalKey<Schema.String>;
    readonly scaleway_domain: Schema.optionalKey<Schema.String>;
    readonly scaleway_uuid: Schema.optionalKey<Schema.String>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type PublicApiControllerDeleteRegistryCredentialsParams = {
    readonly "force"?: boolean;
};
export declare const PublicApiControllerDeleteRegistryCredentialsParams: Schema.Struct<{
    readonly force: Schema.optionalKey<Schema.Boolean>;
}>;
export type ContainerDeploymentTemplatesPublicApiControllerListTemplates200 = ReadonlyArray<ContainerDeploymentTemplatePublicApiDto>;
export declare const ContainerDeploymentTemplatesPublicApiControllerListTemplates200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly provider: Schema.String;
    readonly engine: Schema.String;
    readonly model_repository: Schema.String;
    readonly parameters: Schema.String;
    readonly context_length: Schema.Number;
    readonly input_modalities: Schema.$Array<Schema.String>;
    readonly output_modalities: Schema.$Array<Schema.String>;
    readonly tasks: Schema.$Array<Schema.String>;
    readonly requires_hugging_face_token: Schema.Boolean;
    readonly min_vram_gb: Schema.Number;
    readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type ContainerDeploymentTemplatesPublicApiControllerGetTemplate200 = ContainerDeploymentTemplateDetailPublicApiDto;
export declare const ContainerDeploymentTemplatesPublicApiControllerGetTemplate200: Schema.StructWithRest<Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.String;
    readonly description: Schema.String;
    readonly provider: Schema.String;
    readonly engine: Schema.String;
    readonly model_repository: Schema.String;
    readonly parameters: Schema.String;
    readonly context_length: Schema.Number;
    readonly input_modalities: Schema.$Array<Schema.String>;
    readonly output_modalities: Schema.$Array<Schema.String>;
    readonly tasks: Schema.$Array<Schema.String>;
    readonly requires_hugging_face_token: Schema.Boolean;
    readonly min_vram_gb: Schema.Number;
    readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly revision: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly variants: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly precision: Schema.String;
        readonly model_repository: Schema.String;
        readonly min_vram_gb: Schema.Number;
        readonly is_default: Schema.Boolean;
        readonly description: Schema.optionalKey<Schema.String>;
        readonly recommended_compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly features: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.String>;
        readonly is_default: Schema.Boolean;
        readonly conflicts_with: Schema.$Array<Schema.String>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplatesPublicApiControllerDeployTemplateRequestJson = DeployContainerDeploymentTemplatePublicApiDto;
export declare const ContainerDeploymentTemplatesPublicApiControllerDeployTemplateRequestJson: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly variant: Schema.optionalKey<Schema.String>;
    readonly features: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly compute: Schema.optionalKey<Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>>;
    readonly hf_token_secret_name: Schema.optionalKey<Schema.String>;
    readonly shm_size_mb: Schema.optionalKey<Schema.Literals<readonly [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]>>;
    readonly scaling: Schema.optionalKey<Schema.suspend<Schema.Codec<PatchScalingOptionsPublicApiDto, PatchScalingOptionsPublicApiDto, never, never>>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type ContainerDeploymentTemplatesPublicApiControllerDeployTemplate201 = DeploymentPublicApiResponseDto;
export declare const ContainerDeploymentTemplatesPublicApiControllerDeployTemplate201: Schema.StructWithRest<Schema.Struct<{
    readonly name: Schema.String;
    readonly containers: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
        readonly should_use_cached_image: Schema.optionalKey<Schema.Boolean>;
        readonly exposed_port: Schema.Number;
        readonly healthcheck: Schema.optionalKey<Schema.suspend<Schema.Codec<HealthcheckSettings, HealthcheckSettings, never, never>>>;
        readonly entrypoint_overrides: Schema.optionalKey<Schema.suspend<Schema.Codec<EntrypointOverridesSettings, EntrypointOverridesSettings, never, never>>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.StructWithRest<Schema.Struct<{
            readonly name: Schema.String;
            readonly value_or_reference_to_secret: Schema.String;
            readonly type: Schema.Literals<readonly ["plain", "secret"]>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>>;
        readonly volume_mounts: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.suspend<Schema.Codec<ScratchVolumeMountDto, ScratchVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SecretVolumeMountDto, SecretVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<SharedVolumeMountDto, SharedVolumeMountDto, never, never>>, Schema.suspend<Schema.Codec<MemoryVolumeMountDto, MemoryVolumeMountDto, never, never>>]>>>;
        readonly image: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
        readonly name: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
    readonly endpoint_base_url: Schema.String;
    readonly created_at: Schema.String;
    readonly compute: Schema.suspend<Schema.Codec<ComputeResource, ComputeResource, never, never>>;
    readonly container_registry_settings: Schema.suspend<Schema.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>>;
    readonly is_spot: Schema.Boolean;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>;
export type DeploymentSystemLogsPublicApiControllerGetLogsParams = {
    readonly "reason"?: ReadonlyArray<string>;
    readonly "involved_object"?: ReadonlyArray<string>;
    readonly "search_text"?: string;
    readonly "since"?: string;
    readonly "start"?: string;
    readonly "end"?: Schema.Json;
    readonly "order"?: "asc" | "desc";
    readonly "limit"?: number;
};
export declare const DeploymentSystemLogsPublicApiControllerGetLogsParams: Schema.Struct<{
    readonly reason: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly involved_object: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly search_text: Schema.optionalKey<Schema.String>;
    readonly since: Schema.optionalKey<Schema.String>;
    readonly start: Schema.optionalKey<Schema.String>;
    readonly end: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly order: Schema.optionalKey<Schema.Literals<readonly ["asc", "desc"]>>;
    readonly limit: Schema.optionalKey<Schema.Number>;
}>;
export type DeploymentSystemLogsPublicApiControllerGetLogs200 = ReadonlyArray<SystemLogEntryPublicApiResponseDto>;
export declare const DeploymentSystemLogsPublicApiControllerGetLogs200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly reason: Schema.String;
    readonly message: Schema.String;
    readonly involved_object: Schema.String;
    readonly count: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export type JobSystemLogsPublicApiControllerGetLogsParams = {
    readonly "reason"?: ReadonlyArray<string>;
    readonly "involved_object"?: ReadonlyArray<string>;
    readonly "search_text"?: string;
    readonly "since"?: string;
    readonly "start"?: string;
    readonly "end"?: Schema.Json;
    readonly "order"?: "asc" | "desc";
    readonly "limit"?: number;
};
export declare const JobSystemLogsPublicApiControllerGetLogsParams: Schema.Struct<{
    readonly reason: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly involved_object: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly search_text: Schema.optionalKey<Schema.String>;
    readonly since: Schema.optionalKey<Schema.String>;
    readonly start: Schema.optionalKey<Schema.String>;
    readonly end: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    readonly order: Schema.optionalKey<Schema.Literals<readonly ["asc", "desc"]>>;
    readonly limit: Schema.optionalKey<Schema.Number>;
}>;
export type JobSystemLogsPublicApiControllerGetLogs200 = ReadonlyArray<SystemLogEntryPublicApiResponseDto>;
export declare const JobSystemLogsPublicApiControllerGetLogs200: Schema.$Array<Schema.StructWithRest<Schema.Struct<{
    readonly timestamp: Schema.String;
    readonly reason: Schema.String;
    readonly message: Schema.String;
    readonly involved_object: Schema.String;
    readonly count: Schema.Number;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>>;
export interface OperationConfig {
    /**
     * Whether or not the response should be included in the value returned from
     * an operation.
     *
     * If set to `true`, a tuple of `[A, HttpClientResponse]` will be returned,
     * where `A` is the success type of the operation.
     *
     * If set to `false`, only the success type of the operation will be returned.
     */
    readonly includeResponse?: boolean | undefined;
}
/**
 * A utility type which optionally includes the response in the return result
 * of an operation based upon the value of the `includeResponse` configuration
 * option.
 */
export type WithOptionalResponse<A, Config extends OperationConfig> = Config extends {
    readonly includeResponse: true;
} ? [A, HttpClientResponse.HttpClientResponse] : A;
export declare const make: (httpClient: HttpClient.HttpClient, options?: {
    readonly transformClient?: ((client: HttpClient.HttpClient) => Effect.Effect<HttpClient.HttpClient>) | undefined;
}) => Verda;
export interface Verda {
    readonly httpClient: HttpClient.HttpClient;
    /**
  * Get access token for public API using client credentials or refresh token.You can manage your credentials at https://console.verda.com, under the **Keys** => **Cloud API credentials** section.
  */
    readonly "Oauth2ControllerGetAccessToken": <Config extends OperationConfig>(options: {
        readonly payload: typeof Oauth2ControllerGetAccessTokenRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof Oauth2ControllerGetAccessToken200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"Oauth2ControllerGetAccessToken400", typeof Oauth2ControllerGetAccessToken400.Type> | VerdaError<"Oauth2ControllerGetAccessToken401", typeof Oauth2ControllerGetAccessToken401.Type>>;
    /**
  * Get project balance
  */
    readonly "BalanceControllerGetBalance": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof BalanceControllerGetBalance200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get images types for instances
  */
    readonly "ImagesControllerGetImageTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof ImagesControllerGetImageTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ImagesControllerGetImageTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"404", undefined>>;
    /**
  * Get images types for cluster
  */
    readonly "ImagesControllerGetClusterImageTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof ImagesControllerGetClusterImageTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ImagesControllerGetClusterImageTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"404", undefined>>;
    /**
  * Retrieves all events for the project, for all resources matching the filter criteria. The format to generate audit log is based on [CloudEvents specification](https://github.com/cloudevents/spec).
  */
    readonly "AuditLogControllerGetAuditLog": <Config extends OperationConfig>(options: {
        readonly params?: typeof AuditLogControllerGetAuditLogParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof AuditLogControllerGetAuditLog200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined>>;
    /**
  * Streams the full audit log (matching the given filters, within the retention window) to object storage and returns a short-lived pre-signed download URL.
  */
    readonly "AuditLogControllerDownloadAuditLog": <Config extends OperationConfig>(options: {
        readonly payload: typeof AuditLogControllerDownloadAuditLogRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof AuditLogControllerDownloadAuditLog200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined>>;
    /**
  * Get activity journal for a compute or volume
  */
    readonly "JournalControllerGetJournal": <Config extends OperationConfig>(options: {
        readonly params?: typeof JournalControllerGetJournalParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof JournalControllerGetJournal200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get all events for a compute (instance or cluster). Includes also associated volume or shared storage attach / detach events.
  */
    readonly "JournalControllerGetComputeJournal": <Config extends OperationConfig>(computeId: string, options: {
        readonly params?: typeof JournalControllerGetComputeJournalParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof JournalControllerGetComputeJournal200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get all events for a volume. Does not include compute-related events.
  */
    readonly "JournalControllerGetVolumeJournal": <Config extends OperationConfig>(volumeId: string, options: {
        readonly params?: typeof JournalControllerGetVolumeJournalParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof JournalControllerGetVolumeJournal200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get all volumes
  */
    readonly "VolumesControllerGetVolumes": <Config extends OperationConfig>(options: {
        readonly params?: typeof VolumesControllerGetVolumesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof VolumesControllerGetVolumes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Perform action on a volume or multiple volumes
  */
    readonly "VolumesControllerPerformActions": <Config extends OperationConfig>(options: {
        readonly params: typeof VolumesControllerPerformActionsParams.Encoded;
        readonly payload: typeof VolumesControllerPerformActionsRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Create volume
  */
    readonly "VolumesControllerCreateVolume": <Config extends OperationConfig>(options: {
        readonly params: typeof VolumesControllerCreateVolumeParams.Encoded;
        readonly payload: typeof VolumesControllerCreateVolumeRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined>>;
    /**
  * Get all volumes that are in trash
  */
    readonly "VolumesControllerGetVolumesInTrash": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof VolumesControllerGetVolumesInTrash200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get volume by id
  */
    readonly "VolumesControllerGetVolumeById": <Config extends OperationConfig>(volumeId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof VolumesControllerGetVolumeById200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete volume by id
  */
    readonly "VolumesControllerDeleteVolumeById": <Config extends OperationConfig>(volumeId: string, options: {
        readonly params: typeof VolumesControllerDeleteVolumeByIdParams.Encoded;
        readonly payload: typeof VolumesControllerDeleteVolumeByIdRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Add one key-value tag. Maximum 10 tags per volume. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this volume returns 409.
  */
    readonly "VolumesControllerAddTag": <Config extends OperationConfig>(volumeId: string, options: {
        readonly payload: typeof VolumesControllerAddTagRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof VolumesControllerAddTag201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"409", undefined>>;
    /**
  * Remove a tag from a volume
  */
    readonly "VolumesControllerDeleteTag": <Config extends OperationConfig>(volumeId: string, tagId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"404", undefined>>;
    /**
  * Get volume types
  */
    readonly "VolumeTypesControllerGetVolumeTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof VolumeTypesControllerGetVolumeTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof VolumeTypesControllerGetVolumeTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Return all instances of the project, optionally filtered by status and/or tags.
  *
  * Tag filters: `tag=key` matches instances carrying the key with any value, `tag=key=value` matches the value exactly (split at the first `=`). Repeat the parameter to require multiple tags at once.
  *
  * ### Rate limits
  *
  * This endpoint is rate limited to 120 requests per minute per project.
  */
    readonly "InstancesControllerGetInstances": <Config extends OperationConfig>(options: {
        readonly params?: typeof InstancesControllerGetInstancesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstancesControllerGetInstances200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Perform an action on a single or multiple instances.
  *
  * Note: to `hibernate` an instance, you must first `shutdown` it. All instance volumes would be detached and the instance will be deleted.
  *
  * **Important**: To remove an instance and stop charging your account, you must `delete` it. Using `shutdown` will keep charging your account.
  *
  * When deleting an instance, you can specify which of its' attached volumes will be deleted by providing `volume_ids` array. Any attached volumes that are not specified in the array would be detached.
  *
  * Note: If not providing a `volume_ids` array, only the OS volume will be deleted and the rest detached.
  */
    readonly "InstancesControllerPerformActions": <Config extends OperationConfig>(options: {
        readonly params: typeof InstancesControllerPerformActionsParams.Encoded;
        readonly payload: typeof InstancesControllerPerformActionsRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof InstancesControllerPerformActions202.Type | typeof InstancesControllerPerformActions207.Type | void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"400", undefined> | VerdaError<"404", undefined>>;
    /**
  * Deploy a new instance.
  *
  * Before deploying an instance, you need to add at least ssh key to be able to access your instance.
  *
  * Instance types can be listed using the `GET /instance-types` endpoint.
  *
  * Available images can be listed using the `GET /images` endpoint, using the `image_type` value from the result.
  *
  * Existing detached OS volumes could be used as an image, put the volume ID as the `image` value.
  *
  * It's also possible to define new volumes that will be created and attached to the new instance. New volumes location will be the same as the instance.
  *
  * Existing detached volumes can be attached to the deployed instance by adding their IDs to the `existing_volumes` property.
  */
    readonly "InstancesControllerDeployInstance": <Config extends OperationConfig>(options: {
        readonly params: typeof InstancesControllerDeployInstanceParams.Encoded;
        readonly payload: typeof InstancesControllerDeployInstanceRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get instance types - deprecated
  */
    readonly "InstancesControllerGetInstanceTypesDeprecated": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get instance by id
  */
    readonly "InstancesControllerGetInstanceById": <Config extends OperationConfig>(instanceId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstancesControllerGetInstanceById200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Check instance type availability - deprecated
  */
    readonly "InstancesControllerCheckAvailabilityDeprecated": <Config extends OperationConfig>(instanceType: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Perform action - deprecated
  */
    readonly "InstancesControllerPerformActionDeprecated": <Config extends OperationConfig>(options: {
        readonly params: typeof InstancesControllerPerformActionDeprecatedParams.Encoded;
        readonly payload: typeof InstancesControllerPerformActionDeprecatedRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Add one key-value tag. Maximum 10 tags per instance. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this instance returns 409.
  */
    readonly "InstancesControllerAddTag": <Config extends OperationConfig>(instanceId: string, options: {
        readonly payload: typeof InstancesControllerAddTagRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof InstancesControllerAddTag201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"409", undefined>>;
    /**
  * Remove a tag from an instance
  */
    readonly "InstancesControllerDeleteTag": <Config extends OperationConfig>(instanceId: string, tagId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"404", undefined>>;
    /**
  * Return all clusters of the project
  */
    readonly "ClustersControllerGetInstances": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ClustersControllerGetInstances200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Perform actions on one or more clusters.
  *
  * Note: Only `discontinue` action is allowed for clusters.
  *
  * **Important**: Local OS storage will be deleted. Shared volumes will be detached and should be deleted manually.
  */
    readonly "ClustersControllerPerformActions": <Config extends OperationConfig>(options: {
        readonly params: typeof ClustersControllerPerformActionsParams.Encoded;
        readonly payload: typeof ClustersControllerPerformActionsRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Deploy a new cluster.
  *
  * Before deploying add at least one SSH key to enable access to your cluster.
  *
  * Cluster types can be listed using the `GET /v1/cluster-types` endpoint. Image types can be listed using the `GET /v1/images/cluster` endpoint.
  */
    readonly "ClustersControllerDeployCluster": <Config extends OperationConfig>(options: {
        readonly params: typeof ClustersControllerDeployClusterParams.Encoded;
        readonly payload: typeof ClustersControllerDeployClusterRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof ClustersControllerDeployCluster202.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get cluster by id
  */
    readonly "ClustersControllerGetClusterById": <Config extends OperationConfig>(id: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ClustersControllerGetClusterById200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Start or shut down a single node inside a cluster (worker, jumphost, or CPU service node).
  *
  *     Supported `action` values:
  *     - `boot` — start the node
  *     - `shutdown` — graceful shutdown
  *     - `force_shutdown` — force the node off
  */
    readonly "ClustersControllerPerformClusterNodeAction": <Config extends OperationConfig>(clusterId: string, nodeId: string, options: {
        readonly params: typeof ClustersControllerPerformClusterNodeActionParams.Encoded;
        readonly payload: typeof ClustersControllerPerformClusterNodeActionRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"400", undefined> | VerdaError<"404", undefined>>;
    /**
  * Add one key-value tag. Maximum 10 tags per cluster. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this cluster returns 409.
  */
    readonly "ClustersControllerAddTag": <Config extends OperationConfig>(id: string, options: {
        readonly payload: typeof ClustersControllerAddTagRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof ClustersControllerAddTag201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"409", undefined>>;
    /**
  * Remove a tag from a cluster
  */
    readonly "ClustersControllerDeleteTag": <Config extends OperationConfig>(id: string, tagId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"403", undefined> | VerdaError<"404", undefined>>;
    /**
  * Get instance types
  */
    readonly "InstanceTypesControllerGetInstanceTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof InstanceTypesControllerGetInstanceTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstanceTypesControllerGetInstanceTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get daily dynamic price history (only the last price update per day) - Not supported anymore
  */
    readonly "InstanceTypesControllerGetDailyDynamicPriceHistory": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get all instance type availabilities for all locations
  */
    readonly "InstanceAvailabilityControllerGetAllAvailabilities": <Config extends OperationConfig>(options: {
        readonly params?: typeof InstanceAvailabilityControllerGetAllAvailabilitiesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstanceAvailabilityControllerGetAllAvailabilities200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get instance type availability
  */
    readonly "InstanceAvailabilityControllerCheckAvailability": <Config extends OperationConfig>(instanceType: string, options: {
        readonly params?: typeof InstanceAvailabilityControllerCheckAvailabilityParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstanceAvailabilityControllerCheckAvailability200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get all cluster types availability
  */
    readonly "ClusterAvailabilityControllerGetAllAvailabilities": <Config extends OperationConfig>(options: {
        readonly params?: typeof ClusterAvailabilityControllerGetAllAvailabilitiesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ClusterAvailabilityControllerGetAllAvailabilities200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get specific cluster type availability
  */
    readonly "ClusterAvailabilityControllerCheckAvailability": <Config extends OperationConfig>(clusterType: string, options: {
        readonly params?: typeof ClusterAvailabilityControllerCheckAvailabilityParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ClusterAvailabilityControllerCheckAvailability200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get SSH keys
  */
    readonly "SshkeysControllerGetKeys": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof SshkeysControllerGetKeys200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Add new SSH key
  */
    readonly "SshkeysControllerAddKey": <Config extends OperationConfig>(options: {
        readonly payload: typeof SshkeysControllerAddKeyRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete ssh keys
  */
    readonly "SshkeysControllerDeleteKeys": <Config extends OperationConfig>(options: {
        readonly payload: typeof SshkeysControllerDeleteKeysRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get single SSH key by ID
  */
    readonly "SshkeysControllerGetKey": <Config extends OperationConfig>(sshKeyId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof SshkeysControllerGetKey200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete single SSH key by ID
  */
    readonly "SshkeysControllerDeleteKey": <Config extends OperationConfig>(sshKeyId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get SSH keys
  */
    readonly "DeprecatedSshkeysControllerGetKeys": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof DeprecatedSshkeysControllerGetKeys200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Add new SSH key
  */
    readonly "DeprecatedSshkeysControllerAddKey": <Config extends OperationConfig>(options: {
        readonly payload: typeof DeprecatedSshkeysControllerAddKeyRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete ssh keys
  */
    readonly "DeprecatedSshkeysControllerDeleteKeys": <Config extends OperationConfig>(options: {
        readonly payload: typeof DeprecatedSshkeysControllerDeleteKeysRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get single SSH key by ID
  */
    readonly "DeprecatedSshkeysControllerGetKey": <Config extends OperationConfig>(sshKeyId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof DeprecatedSshkeysControllerGetKey200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete single SSH key by ID
  */
    readonly "DeprecatedSshkeysControllerDeleteKey": <Config extends OperationConfig>(sshKeyId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get startup scripts
  */
    readonly "ScriptsControllerGetScripts": <Config extends OperationConfig>(options: {
        readonly params?: typeof ScriptsControllerGetScriptsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScriptsControllerGetScripts200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Add new startup script
  */
    readonly "ScriptsControllerAddScript": <Config extends OperationConfig>(options: {
        readonly payload: typeof ScriptsControllerAddScriptRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete startup scripts
  */
    readonly "ScriptsControllerDeleteScripts": <Config extends OperationConfig>(options: {
        readonly payload: typeof ScriptsControllerDeleteScriptsRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get single startup script by ID
  */
    readonly "ScriptsControllerGetScript": <Config extends OperationConfig>(scriptId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScriptsControllerGetScript200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Delete single startup script by ID
  */
    readonly "ScriptsControllerDeleteKey": <Config extends OperationConfig>(scriptId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Returns a list of available locations
  */
    readonly "LocationsControllerGetVolumeTypes": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof LocationsControllerGetVolumeTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get long term periods
  */
    readonly "LongTermControllerGetLongTermPeriodsDeprecated": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof LongTermControllerGetLongTermPeriodsDeprecated200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get long term periods for instances
  */
    readonly "LongTermControllerGetLongTermPeriodsInstances": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof LongTermControllerGetLongTermPeriodsInstances200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get long term periods for clusters
  */
    readonly "LongTermControllerGetLongTermPeriodsClusters": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof LongTermControllerGetLongTermPeriodsClusters200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get cluster types
  */
    readonly "ClusterTypesControllerGetInstanceTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof ClusterTypesControllerGetInstanceTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ClusterTypesControllerGetInstanceTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get container types
  */
    readonly "ContainerTypesControllerGetContainerTypes": <Config extends OperationConfig>(options: {
        readonly params?: typeof ContainerTypesControllerGetContainerTypesParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ContainerTypesControllerGetContainerTypes200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get managed inference endpoint prices
  */
    readonly "ManagedEndpointsControllerGetPricing": <Config extends OperationConfig>(options: {
        readonly params?: typeof ManagedEndpointsControllerGetPricingParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ManagedEndpointsControllerGetPricing200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get container registry price
  */
    readonly "ContainerRegistryControllerGetContainerRegistryPricing": <Config extends OperationConfig>(options: {
        readonly params?: typeof ContainerRegistryControllerGetContainerRegistryPricingParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ContainerRegistryControllerGetContainerRegistryPricing200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Returns this project’s live instance groups, oldest first.
  */
    readonly "InstanceGroupsPublicControllerList": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstanceGroupsPublicControllerList200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Creates a project-scoped group with a name, description, location, instance type and template.
  */
    readonly "InstanceGroupsPublicControllerCreate": <Config extends OperationConfig>(options: {
        readonly payload: typeof InstanceGroupsPublicControllerCreateRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof InstanceGroupsPublicControllerCreate201.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Get an instance group
  */
    readonly "InstanceGroupsPublicControllerGet": <Config extends OperationConfig>(instanceGroupId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof InstanceGroupsPublicControllerGet200.Type, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Removes the group from caller-facing reads while retaining its historical row and allowing its name to be reused.
  */
    readonly "InstanceGroupsPublicControllerRemove": <Config extends OperationConfig>(instanceGroupId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError>;
    /**
  * Name, description, and template SSH keys or startup script can change. Location, instance type, image and OS volume are immutable.
  */
    readonly "InstanceGroupsPublicControllerUpdate": <Config extends OperationConfig>(instanceGroupId: string, options: {
        readonly payload: typeof InstanceGroupsPublicControllerUpdateRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof InstanceGroupsPublicControllerUpdate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"400", undefined> | VerdaError<"409", undefined>>;
    /**
  * Fetch log lines from the replicas of a deployment.
  */
    readonly "DeploymentLogsPublicApiControllerGetLogs": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly params?: typeof DeploymentLogsPublicApiControllerGetLogsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof DeploymentLogsPublicApiControllerGetLogs200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined> | VerdaError<"404", undefined>>;
    /**
  * Fetch log lines from the replicas of a job deployment.
  */
    readonly "JobLogsPublicApiControllerGetLogs": <Config extends OperationConfig>(jobName: string, options: {
        readonly params?: typeof JobLogsPublicApiControllerGetLogsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof JobLogsPublicApiControllerGetLogs200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined> | VerdaError<"404", undefined>>;
    /**
  * Get all job deployments
  */
    readonly "ScaledJobPublicApiControllerGetList": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerGetList200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Create new job
  */
    readonly "ScaledJobPublicApiControllerCreateNewScaledJob": <Config extends OperationConfig>(options: {
        readonly payload: typeof ScaledJobPublicApiControllerCreateNewScaledJobRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerCreateNewScaledJob201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get job deployment by name
  */
    readonly "ScaledJobPublicApiControllerGetByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerGetByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Delete job deployment
  */
    readonly "ScaledJobPublicApiControllerDeleteByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly params?: typeof ScaledJobPublicApiControllerDeleteByNameParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Update job deployment
  */
    readonly "ScaledJobPublicApiControllerUpdateScaledJobByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly payload: typeof ScaledJobPublicApiControllerUpdateScaledJobByNameRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerUpdateScaledJobByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get job deployment scaling options
  */
    readonly "ScaledJobPublicApiControllerGetScalingOptionsByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerGetScalingOptionsByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Purge job deployment queue
  */
    readonly "ScaledJobPublicApiControllerPurgeQueue": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Pause job deployment
  */
    readonly "ScaledJobPublicApiControllerPauseScaledJobByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Resume job deployment
  */
    readonly "ScaledJobPublicApiControllerResumeScaledJobByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get job deployment status
  */
    readonly "ScaledJobPublicApiControllerGetScaledJobStatusByName": <Config extends OperationConfig>(jobName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ScaledJobPublicApiControllerGetScaledJobStatusByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get all deployments
  */
    readonly "PublicApiControllerGetDeploymentsList": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetDeploymentsList200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Create new deployment
  */
    readonly "PublicApiControllerCreateNewDeployment": <Config extends OperationConfig>(options: {
        readonly payload: typeof PublicApiControllerCreateNewDeploymentRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerCreateNewDeployment201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get deployment by name
  */
    readonly "PublicApiControllerGetDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetDeploymentByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Delete deployment
  */
    readonly "PublicApiControllerDeleteDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly params?: typeof PublicApiControllerDeleteDeploymentByNameParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Update deployment
  */
    readonly "PublicApiControllerUpdateDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly payload: typeof PublicApiControllerUpdateDeploymentByNameRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerUpdateDeploymentByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get deployment status
  */
    readonly "PublicApiControllerGetReplicasStatusByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetReplicasStatusByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Restart deployment
  */
    readonly "PublicApiControllerRestartDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get deployment scaling options by deployment name
  */
    readonly "PublicApiControllerGetDeploymentScalingOptionsByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetDeploymentScalingOptionsByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Update deployment scaling options
  */
    readonly "PublicApiControllerUpdateDeploymentScalingOptionsByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly payload: typeof PublicApiControllerUpdateDeploymentScalingOptionsByNameRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerUpdateDeploymentScalingOptionsByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get deployment replicas by deployment name
  */
    readonly "PublicApiControllerGetDeploymentReplicasByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetDeploymentReplicasByName200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Purge deployment queue
  */
    readonly "PublicApiControllerPurgeQueue": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Pause deployment
  */
    readonly "PublicApiControllerPauseDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Resume deployment
  */
    readonly "PublicApiControllerResumeDeploymentByName": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get deployment environment variables
  */
    readonly "PublicApiControllerGetDeploymentEnvironmentVariables": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetDeploymentEnvironmentVariables200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Add environment variables to a container
  */
    readonly "PublicApiControllerAddEnvironmentVariablesToContainer": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly payload: typeof PublicApiControllerAddEnvironmentVariablesToContainerRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerAddEnvironmentVariablesToContainer200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Delete environment variables of a container
  */
    readonly "PublicApiControllerDeleteEnvironmentVariablesOfContainer": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly payload: typeof PublicApiControllerDeleteEnvironmentVariablesOfContainerRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerDeleteEnvironmentVariablesOfContainer200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Update environment variables of a container. The env vars must exist in order to update them
  */
    readonly "PublicApiControllerUpdateEnvironmentVariablesOfContainer": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly payload: typeof PublicApiControllerUpdateEnvironmentVariablesOfContainerRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerUpdateEnvironmentVariablesOfContainer200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get compute resource types and availability
  */
    readonly "PublicApiControllerGetComputeAndAvailability": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetComputeAndAvailability200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get secrets
  */
    readonly "PublicApiControllerGetSecrets": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetSecrets200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Create new secret
  */
    readonly "PublicApiControllerAddSecret": <Config extends OperationConfig>(options: {
        readonly payload: typeof PublicApiControllerAddSecretRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Will error if the secret is used in a deployment
  */
    readonly "PublicApiControllerDeleteSecret": <Config extends OperationConfig>(secretName: string, options: {
        readonly params?: typeof PublicApiControllerDeleteSecretParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * File secrets can be used as a secret mount storage
  */
    readonly "PublicApiControllerGetFilesetSecrets": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetFilesetSecrets200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * File secrets can be used as a secret mount storage
  */
    readonly "PublicApiControllerAddFilesetSecret": <Config extends OperationConfig>(options: {
        readonly payload: typeof PublicApiControllerAddFilesetSecretRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Will error if the secret is used in a deployment
  */
    readonly "PublicApiControllerDeleteFilesetSecret": <Config extends OperationConfig>(secretName: string, options: {
        readonly params?: typeof PublicApiControllerDeleteFilesetSecretParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get all registry credentials
  */
    readonly "PublicApiControllerGetRegistryCredentials": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof PublicApiControllerGetRegistryCredentials200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Add registry credentials
  */
    readonly "PublicApiControllerAddRegistryCredentials": <Config extends OperationConfig>(options: {
        readonly payload: typeof PublicApiControllerAddRegistryCredentialsRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Delete registry credentials
  */
    readonly "PublicApiControllerDeleteRegistryCredentials": <Config extends OperationConfig>(credentialsName: string, options: {
        readonly params?: typeof PublicApiControllerDeleteRegistryCredentialsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<void, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * List container deployment templates
  */
    readonly "ContainerDeploymentTemplatesPublicApiControllerListTemplates": <Config extends OperationConfig>(options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ContainerDeploymentTemplatesPublicApiControllerListTemplates200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Get a container deployment template
  */
    readonly "ContainerDeploymentTemplatesPublicApiControllerGetTemplate": <Config extends OperationConfig>(templateId: string, options: {
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof ContainerDeploymentTemplatesPublicApiControllerGetTemplate200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Deploy a container deployment template
  */
    readonly "ContainerDeploymentTemplatesPublicApiControllerDeployTemplate": <Config extends OperationConfig>(templateId: string, options: {
        readonly payload: typeof ContainerDeploymentTemplatesPublicApiControllerDeployTemplateRequestJson.Encoded;
        readonly config?: Config | undefined;
    }) => Effect.Effect<WithOptionalResponse<typeof ContainerDeploymentTemplatesPublicApiControllerDeployTemplate201.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"401", undefined>>;
    /**
  * Fetch deployment system logs.
  */
    readonly "DeploymentSystemLogsPublicApiControllerGetLogs": <Config extends OperationConfig>(deploymentName: string, options: {
        readonly params?: typeof DeploymentSystemLogsPublicApiControllerGetLogsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof DeploymentSystemLogsPublicApiControllerGetLogs200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"400", undefined> | VerdaError<"401", undefined> | VerdaError<"403", undefined> | VerdaError<"404", undefined>>;
    /**
  * Fetch job deployment system logs.
  */
    readonly "JobSystemLogsPublicApiControllerGetLogs": <Config extends OperationConfig>(jobName: string, options: {
        readonly params?: typeof JobSystemLogsPublicApiControllerGetLogsParams.Encoded | undefined;
        readonly config?: Config | undefined;
    } | undefined) => Effect.Effect<WithOptionalResponse<typeof JobSystemLogsPublicApiControllerGetLogs200.Type, Config>, HttpClientError.HttpClientError | SchemaError | VerdaError<"400", undefined> | VerdaError<"401", undefined> | VerdaError<"403", undefined> | VerdaError<"404", undefined>>;
}
export interface VerdaError<Tag extends string, E> {
    readonly _tag: Tag;
    readonly request: HttpClientRequest.HttpClientRequest;
    readonly response: HttpClientResponse.HttpClientResponse;
    readonly cause: E;
}
export declare const VerdaError: <Tag extends string, E>(tag: Tag, cause: E, response: HttpClientResponse.HttpClientResponse) => VerdaError<Tag, E>;
