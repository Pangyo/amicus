package org.pangyo.amicus.model.oauth;

import lombok.Getter;

@Getter
public enum OAuthServiceProviderType {
	GOOGLE("google");

	private String serviceProvider;

	OAuthServiceProviderType(String serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

	public OAuthServiceProviderType find(String serviceProvider) {
		for (OAuthServiceProviderType e : values()) {
			if (e.getServiceProvider().equals(serviceProvider)) {
				return e;
			}
		}

		return null;
	}

}
