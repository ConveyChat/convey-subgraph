import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Broadcast,
  Message,
  SubscribeBroadcast,
  UnsubscribeBroadcast,
} from "../generated/Contract/Contract";
import { MessageEntity, SubscriptionEntity } from "../generated/schema";

export function handleBroadcast(event: Broadcast): void {
  let entity = MessageEntity.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new MessageEntity(event.transaction.from.toHex());
  }

  entity.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  entity.sender = event.params._from;
  entity.ipfsHash = event.params.message;

  entity.save();
}

export function handleMessage(event: Message): void {
  let entity = MessageEntity.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new MessageEntity(event.transaction.from.toHex());
  }

  entity.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  entity.sender = event.params._from;
  entity.receiver = event.params._to;
  entity.ipfsHash = event.params.message;

  entity.save();
}

export function handleSubscribeBroadcast(event: SubscribeBroadcast): void {
  let entity = SubscriptionEntity.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new SubscriptionEntity(event.transaction.from.toHex());
  }

  entity.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  entity.sender = event.params._sender;
  entity.subscription = event.params._subscription;
  entity.type = "subscribe";

  entity.save();
}

export function handleUnsubscribeBroadcast(event: UnsubscribeBroadcast): void {
  let entity = SubscriptionEntity.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new SubscriptionEntity(event.transaction.from.toHex());
  }

  entity.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  entity.sender = event.params._sender;
  entity.subscription = event.params._subscription;
  entity.type = "unsubscribe";

  entity.save();
}
